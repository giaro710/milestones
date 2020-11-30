export const createPath = (path) => {
  console.log("This is the " + path);
  return {
    type: "CREATE_PATH",
    payload: path,
  };
};

/*
TODO:
- Create actions for: createPath and createStone
*/

const createStone = (stone) => {
  return {
    type: "CREATE_STONE",
    payload: stone,
  };
};
