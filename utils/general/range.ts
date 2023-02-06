export const range = (from, to, including = true) => {
    const scope = including ? to - from + 1 : to - from - 1;
    return Array(scope)
      .fill(0)
      .map((_, id) => (including ? from + id : from + id + 1));
  };