export interface AuthState{
    auth: boolean
}


export enum AuthActionEnum {
    SET_AUTH = 'SET_AUTH'
}

export interface SetAuthAction{
    type: AuthAction.SET_AUTH,
    payload: boolean
}

export type AuthAction = SetAuthAction