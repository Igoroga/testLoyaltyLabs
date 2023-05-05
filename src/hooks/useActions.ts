import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {useMemo} from "react";
import AuthActionCreators from "../store/reducers/auth/actionCreators";
import { allActionCreators } from "../store/reducers/allActions";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allActionCreators, dispatch);
}