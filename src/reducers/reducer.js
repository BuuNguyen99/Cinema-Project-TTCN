import { combineReducers } from "redux";
import reducerMovie from "./reducerMovie";
import reducerUsers from "./reducerUsers";
import reducerFoods from "./reducerFood";
import reducerSupport from "./reducerSupport";
import reducerTickets from "./reducerTicket";
import reducerShowtimes from "./reducerShowtimes";
const reducer = combineReducers({
  reducerMovie,
  reducerUsers,
  reducerShowtimes,
  reducerSupport,
  reducerTickets,
  reducerFoods,
});

export default reducer;
