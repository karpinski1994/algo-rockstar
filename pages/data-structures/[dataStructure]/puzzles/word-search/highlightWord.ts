const directions = [
    [0, 1], // right
    [0, -1], // left
    [1, 0], // down
    [-1, 0] // up
  ];
  
  const highlightWord = (board: Array<any>, word: string) => {
    console.log("word: ", word);
    const isUsed = board.map((row) => row.map(() => false));
    const target = [...word as any];
    console.log("target: ", target);
    const traverse = (i: number, j: number) => {
      if (
        i < 0 ||
        i >= board.length ||
        j < 0 ||
        j >= board[0].length ||
        isUsed[i][j] ||
        board[i][j] !== target[0]
      ) {
        return false;
      }
      const letter = target.shift();
      isUsed[i][j] = true;
      console.log("target:", target);
  
      if (
        target.length === 0 ||
        directions.some(([x, y]) => traverse(i + x, j + y))
      ) {
        return true;
      }
  
      target.unshift(letter);
      isUsed[i][j] = false;
      console.log("target:", target);
      return false;
    };
  
    board.forEach((row: Array<any>, i: number) => row.forEach((_: any, j: number) => traverse(i, j)));
  
    const fieldsToDisplay = board.map((row, r) =>
      row.map((letter: string, c: number) => ({
        letter,
        isUsed: isUsed[r][c]
      }))
    );
  
    return fieldsToDisplay;
  };
  
  export default highlightWord;
  