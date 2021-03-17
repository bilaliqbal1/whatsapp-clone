import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from '../connection/firebase'
import { actionTypes } from '../redux/reducer/reducer'
import { useStateValue } from '../redux/StateProvider'
import './login.css'
const Login = () => {
    const [{}, dispatch] = useStateValue()
    const signIn = ()=>{
        auth.signInWithPopup(provider)
        .then(result=> {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error) => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login-container">
                <img src="https://e7.pngegg.com/pngimages/44/399/png-clipart-whatsapp-computer-icons-iphone-android-whatsapp-logo-grass.png" alt="" />
                <div className="login-text">
                    <h1>Sign into Whatsapp</h1>
                </div>
                <Button type="submit" onClick={signIn}>
                    Sign in with google
                </Button>
            </div>
        </div>
    )
}

export default Login
