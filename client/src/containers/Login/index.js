import React from 'react';
import LoginForm from '../../components/LoginForm';
import {useStoreContext} from '../../utils/GlobalState';
import {LOG_IN} from '../../utils/actions';


const LoginPage=()=>{
    const [state,dispatch]=useStoreContext();
    return <div>LoginPage

            <LoginForm onLogIn={(account)=>{
                localStorage.setItem("authorization-token",account.token);
                dispatch({
                    type:LOG_IN,
                    payload:account
                })
            }} />
    </div>
}
export default LoginPage;