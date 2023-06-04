const directions = [
    [0, 1], // right
    [0, -1], // left
    [1, 0], // down
    [-1, 0] // up
  ];
  
  const highlightWord = (board: Array<any> = [[]], word : any) => {
    const isUsed: any = Array.isArray(board) && board.map((row: any) => row.map(() => false));
    const target = Array.from(word);
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
  
    Array.isArray(board) && board.forEach((row: Array<any>, i: number) => row.forEach((_: any, j: number) => traverse(i, j)));
  
    const fieldsToDisplay = Array.isArray(board) && board.map((row: any, r: number) =>
      row.map((letter: string, c: number) => ({
        letter,
        isUsed: isUsed[r][c]
      }))
    );
  
    return fieldsToDisplay;
  };
  
  export default highlightWord;
  