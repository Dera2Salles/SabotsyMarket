export const leveinshtein_distance = (
  fromWord: string,
  toWord: string
): number => {
  const numberOfLine: number = toWord.length + 1;
  const numberOfRow: number = fromWord.length + 1;

  const matrix: number[][] = Array.from(
    { length: numberOfLine },
    () => new Array(numberOfRow)
  );

  for (
    let rowIteration: number = 0;
    rowIteration <= numberOfRow - 1;
    rowIteration++
  ) {
    matrix[0][rowIteration] = numberOfRow - (numberOfRow - rowIteration);
  }

  for (
    let lineIteration: number = 0;
    lineIteration <= numberOfLine - 1;
    lineIteration++
  ) {
    matrix[lineIteration][0] = numberOfLine - (numberOfLine - lineIteration);
  }

  for (
    let lineIteration = 1;
    lineIteration <= numberOfLine - 1;
    lineIteration++
  ) {
    for (
      let rowIteration = 1;
      rowIteration <= numberOfRow - 1;
      rowIteration++
    ) {
      if (fromWord[rowIteration - 1] != toWord[lineIteration - 1]) {
        const min = Math.min(
          matrix[lineIteration - 1][rowIteration],
          matrix[lineIteration - 1][rowIteration - 1],
          matrix[lineIteration][rowIteration - 1]
        );
        matrix[lineIteration][rowIteration] = min + 1;
      } else {
        matrix[lineIteration][rowIteration] =
          matrix[lineIteration - 1][rowIteration - 1];
      }
    }
  }

  return matrix[numberOfLine - 1][numberOfRow - 1];
};
