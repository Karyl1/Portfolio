import React, { useState, useEffect } from 'react';
import { GoogleLogout, GoogleLogin } from 'react-google-login';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { connect } from 'react-redux';

const clientId = '1023684340740-vt8dl40u1mmunpbni943hmcj23sqmgjt.apps.googleusercontent.com';

const GoogleOAuth = (props) => {
    const [isConnect, setIsConnect] = useState(false);
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
                props.dispatch({
                    type: 'SET_USER',
                    data: userProfile.userProfile,
                    isConnected: true
                })
                } else {
                    console.error(response, "Erreur lors de la connexion");
                }
            })
            .catch(err => console.error(err))
        }
    }

    const success = response => {
        fetch('/get_account', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' }, 
            body: JSON.stringify(response.profileObj)
        })
        .then(res => res.json())
        .then(res => {
            if(res.status === 200) {
                const toStorage = {
                    token: response.tokenId,
                    userProfile: res.data[0]
                }
                localStorage.setItem('google-access', JSON.stringify(toStorage));
                setIsConnect(true);
                props.dispatch({
                    type: 'SET_USER',
                    data: res.data[0],
                    isConnected: true
                })
            } else {
                console.error(res.status, 'Erreur de la connexion')
            }
        })
        .catch(err => console.log(err))
    }

    const error = response => {
        console.error(response) // eslint-disable-line
    }

    const logout = () => {
        localStorage.removeItem('google-access');
        setIsConnect(false);
        props.dispatch({
            type: 'SET_USER',
            data: {},
            isConnected: false
        })
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

const mapDispatchToProps = (store) => ({
    userInfo: store.data
})

export default connect(mapDispatchToProps)(GoogleOAuth);