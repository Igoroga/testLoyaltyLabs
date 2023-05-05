import axios from 'axios';
import { AppDispatch, RootState, AppThunk } from '../..';
import { IUser } from '../../../models/IUser';
import { AuthAction, AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction } from './types';
import { setTimeout } from 'timers/promises';




const AuthActionCreators = {
    setUser: (payload: IUser): SetUserAction => ({
        type: AuthActionEnum.SET_USER,
        payload: payload
    }),
    setError: (payload: string): SetErrorAction => ({
        type: AuthActionEnum.SET_ERROR,
        payload
    }),
    setLoading: (payload: boolean): SetIsLoadingAction => ({
        type: AuthActionEnum.SET_IS_LOADING,
        payload: payload
    }),
    setAuth: (auth: boolean): SetAuthAction => ({
        type: AuthActionEnum.SET_AUTH,
        payload: auth
    }),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setLoading(true));
            const response = await axios.get<IUser[]>("./users.json");
            console.log(response);            
            const mockUser = response.data.find(user => user.username === username && user.password === password);
                if (mockUser) {
                    localStorage.setItem('auth', 'true');
                    localStorage.setItem('username', mockUser.username);
                    dispatch(AuthActionCreators.setUser(mockUser));
                    dispatch(AuthActionCreators.setAuth(true))
                } else {
                    dispatch(AuthActionCreators.setError('Некорректный логин или пароль'));
                    console.log('Некорректный логин или пароль');
                }
                dispatch(AuthActionCreators.setLoading(false));
            } catch (e) {
            dispatch(AuthActionCreators.setError('Произошла ошибка при логине'))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
            localStorage.removeItem('auth')
        localStorage.removeItem('username')
        dispatch(AuthActionCreators.setUser({} as IUser))
        dispatch(AuthActionCreators.setAuth(false))
           }

};
export default AuthActionCreators;


// login: (username: string, password: string) => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(AuthActionCreators.setIsLoading(true));
//         setTimeout(async () => {
//             const response = await UserService.getUsers()
//             const mockUser = response.data.find(user => user.username === username && user.password === password);
//             if (mockUser) {
//                 localStorage.setItem('auth', 'true');
//                 localStorage.setItem('username', mockUser.username);
//                 dispatch(AuthActionCreators.setUser(mockUser));
//                 dispatch(AuthActionCreators.setIsAuth(true))
//             } else {
//                 dispatch(AuthActionCreators.setError('Некорректный логин или пароль'));
//             }
//             dispatch(AuthActionCreators.setIsLoading(false));
//         }, 1000)
//     } catch (e) {
//         dispatch(AuthActionCreators.setError('Произошла ошибка при логине'))
//     }
// },