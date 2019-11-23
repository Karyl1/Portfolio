import React, { useState, useEffect } from 'react';
import { GoogleLogout, GoogleLogin } from 'react-google-login';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const clientId = '1023684340740-vt8dl40u1mmunpbni943hmcj23sqmgjt.apps.googleusercontent.com';

const GoogleOAuth = () => {
    const [isConnect, setIsConnect] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => isStorage());

    const isStorage = () => {
        const userProfile = JSON.parse(localStorage.getItem('google-access'));
        if(userProfile !== null && isConnect !== true) {
            const params = {
                method: 'GET',
                header: 'Content-Type: application/json'
            }
            let response;
            fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${userProfile.token}`, params)
            .then(res => {
                return (response = res.status, res = res.json())
            })
            .then(res => {
                if(response === 200) {
                setIsConnect(true);
                setUserInfo(res)
                console.log(res)
                }
            })
            .catch(err => console.error(err))
        }
    }

    const success = response => {
        const toStorage = {
            token: response.tokenId,
            userProfile: response.profileObj
        }
        localStorage.setItem('google-access', JSON.stringify(toStorage));
        setIsConnect(true);
        console.log(response) // eslint-disable-line
    }

    const error = response => {
        console.error(response) // eslint-disable-line
    }

    const logout = () => {
        localStorage.removeItem('google-access');
        setIsConnect(false);
        console.log('logout') // eslint-disable-line
    }

    const selectComponent = {
        notConnected: <GoogleLogin
            clientId={clientId}
            buttonText="Se connecter avec google"
            onSuccess={success}
            onFailure={error}
            cookiePolicy={'single_host_origin'}
            />,
        connected: <GoogleLogout
            clientId={clientId}
            buttonText="Se déconnecter"
            onLogoutSuccess={logout}
            ></GoogleLogout>
    }

    const componentToDisplay = isConnect === true ? selectComponent.connected : selectComponent.notConnected;
    
    return (
        <div>
            {componentToDisplay}
        </div>
    )
      
}

export default GoogleOAuth;