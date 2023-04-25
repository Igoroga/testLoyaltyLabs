import { log } from "console";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";


const rootReduser = combineReducers({

})


export const store = createStore(rootReduser, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch





// export const fetchCustomers = () => {
//     return function(dispatch){
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then(response => response.json())
//         .then(json => dispatch())
//     }
// }


// <button onClick={() => dispatchEvent(fetchCustomers())}>Получить клиентов из базы</button>