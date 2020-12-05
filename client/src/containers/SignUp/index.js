import React from 'react';
import SignUp from '../../components/SignUp';
import {useStoreContext} from '../../utils/GlobalState';
import {SIGN_UP} from '../../utils/actions';
import Navbar from '../../components/Navbar';


const SignUpPage=()=>{
    const [state,dispatch]=useStoreContext();
    return <div>
            <Navbar />
            <SignUp onSignUp={(account)=>{
                dispatch({
                    type:SIGN_UP,
                    payload:account
                })
            }} />
    </div>
}
export default SignUpPage;