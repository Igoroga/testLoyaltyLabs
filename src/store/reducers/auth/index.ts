import { AuthAction, AuthActionEnum, AuthState } from "./types";


const initialState: AuthState = {
    auth: false
}


export default function authRuducer(state = initialState, action: AuthAction): AuthState {
    switch (action.type) {
        case AuthActionEnum.SET_AUTH:
            return { ...state, auth: action.payload }
        default:
            return state;
    }

}