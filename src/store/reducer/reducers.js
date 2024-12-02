import {
  combineReducers
} from "redux";
import MovieListReducer from "./MoviesSlice";

const rootReducer = combineReducers({
  movieList: MovieListReducer,
});

export default rootReducer;