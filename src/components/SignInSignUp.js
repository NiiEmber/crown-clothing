import React from 'react'
import SignUp from '../SignUp'
import '../styles/SignInSignUp.scss'
import SignIn from './SignIn'


const SignInSignUp = () => {
    return (
        <div className='sign-in-sign-up'>
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInSignUp
