import { Action, applyMiddleware, combineReducers, createStore } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import reducers from "./reducers/index";

const rootReducer = combineReducers(reducers)


export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;




// export const fetchCustomers = () => {
//     return function(dispatch){
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then(response => response.json())
//         .then(json => dispatch())
//     }
// }


// <button onClick={() => dispatchEvent(fetchCustomers())}>Получить клиентов из базы</button>