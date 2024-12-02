const MovieListReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_UPDATING_LIST":
      return {
        ...state,
        updating: action.payload,
      };
    default:
      return state;
  }
};

export default MovieListReducer;