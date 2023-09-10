export function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomizeRatings(
  randomizeObject: Record<string, number>,
  maximumRating: number,
  nested = false,
): object {
  const MAXIMUM_RATING = 6;

  const randomizeObjectKeys = Object.keys(randomizeObject as object);

  let leftObjectKeys = [...randomizeObjectKeys];
  let leftMaximumRating = maximumRating;

  randomizeObjectKeys.forEach(() => {
    const randomKey = randomNumber(0, leftObjectKeys.length - 1);

    const currentObjectKey = leftObjectKeys[randomKey];
    const currentAttribute = randomizeObject[currentObjectKey];

    if (currentAttribute !== MAXIMUM_RATING && leftMaximumRating > 0) {
      leftObjectKeys = leftObjectKeys.filter((key) => key !== currentObjectKey);

      const availableRating =
        leftMaximumRating > MAXIMUM_RATING ? MAXIMUM_RATING : leftMaximumRating;

      const randomRating =
        nested && availableRating !== MAXIMUM_RATING
          ? randomNumber(
              currentAttribute,
              currentAttribute + availableRating <= MAXIMUM_RATING
                ? currentAttribute + availableRating
                : MAXIMUM_RATING,
            )
          : randomNumber(currentAttribute, availableRating);

      randomizeObject[currentObjectKey] = randomRating;

      leftMaximumRating -= nested
        ? randomRating - currentAttribute
        : randomRating;
    }
  });

  if (leftMaximumRating > 0) {
    return randomizeRatings(randomizeObject, leftMaximumRating, true);
  }

  return randomizeObject;
}
