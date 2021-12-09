export const AppReducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_USER":
      const newUsers = state.users.filter((user) => user.id !== action.payload);
      return {
        ...state,
        users: newUsers,
      };
    case "ADD_USER":
      const addUsers = [action.payload, ...state.users];
      return {
        ...state,
        users: addUsers,
      };
    case "EDIT_USER":
      const updateUser = action.payload;
      const UpdatedUsers = state.users.map((user) => {
        if (user.id === updateUser.id) {
          return updateUser;
        } else {
          return user;
        }
      });

      return { users: UpdatedUsers };
    default:
      return state;
  }
};
