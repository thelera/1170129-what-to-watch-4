import {combineReducers} from "redux";
import {reducer as data} from "./data/data";
import {reducer as error} from "./error/error";
import {reducer as user} from "./user/user";
import {reducer as comments} from "./comments/comments";
import NameSpace from "./name-space";

export default combineReducers({
  [NameSpace.COMMENTS]: comments,
  [NameSpace.ERROR]: error,
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
});

