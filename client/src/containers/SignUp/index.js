import React from 'react';
import SignUp from '../../components/SignUp';
import {useStoreContext} from '../../utils/GlobalState';
import {SIGN_UP} from '../../utils/actions';


const SignUpPage=()=>{
    const [state,dispatch]=useStoreContext();
    return <div>Sign Up Page

            <SignUp onSignUp={(account)=>{
                dispatch({
                    type:SIGN_UP,
                    payload:account
                })
            }} />
    </div>
}
export default SignUpPage;