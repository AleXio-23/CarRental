import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tokenValidationAction } from "../../Modules/User/TokenValidation/Action";


export const decodeJwtToken = (token) => {return jwt_decode(token); }

export const useTokenValidation = ({token}) => {

    // const tokenSelector = useSelector(state => state.tokenValidate);     
    // const tokenCheckerDt = tokenSelector.data; 
    const dispatch = useDispatch();
    // console.log(tokenCheckerDt)
    const validateToken = dispatch(tokenValidationAction.get());
    const isTokenValid = validateToken?.isValid

    useEffect(() => {
        console.log('Hook loaded', token);
    }, [])

    return {
        isTokenValid
    }

}   