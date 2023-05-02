import axios from 'axios';
import { AppDispatch, RootState } from '../..';
import { IUser } from '../../../models/IUser';
import { AuthAction, AuthActionEnum, SetAuthAction, SetErrorAction, SetLoadingAction, SetUserAction } from './types';




const AuthActionCreators = {
    setUser: (payload: IUser): SetUserAction => ({
        type: AuthActionEnum.SET_USER,
        payload: payload
    }),
    setError: (payload: string): SetErrorAction => ({
        type: AuthActionEnum.SET_ERROR,
        payload
    }),
    setLoading: (payload: boolean): SetLoadingAction => ({
        type: AuthActionEnum.SET_LOADING,
        payload: payload
    }),
    setAuth: (auth: boolean): SetAuthAction => ({
        type: AuthActionEnum.SET_AUTH,
        payload: auth
    }),
    logi: (username: string, password: string) => {
        return async (dispatch: AppDispatch) => {
            try {
                dispatch(AuthActionCreators.setLoading(true));
                const mockUsers = await axios.get("./users.json");
                console.log(mockUsers);
            } catch {
                dispatch(AuthActionCreators.setError("Mistake I"))
            }
        }
        },
            logout: () => async (dispatch: AppDispatch) => {
                try {

                } catch {

                }
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