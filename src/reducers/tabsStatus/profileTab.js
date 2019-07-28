const profileTabReducer = (state = false, action) => {
  switch (action.Type) {
    case "SELECTED":
      return true;
    default:
      return false;
  }
};
export default profileTabReducer;
