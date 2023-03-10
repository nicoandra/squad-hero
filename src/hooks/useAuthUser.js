import { useState, useEffect, useCallback } from "react"
import { Hub, Auth } from 'aws-amplify';

export const useAuthUser = () => {
    const [username, setUsername] = useState('');
    const [userIdentification, setUserIdentification] = useState('');
    const [user, setUser] = useState(false);
    const [lastKnownUserAction, setLastKnownUserAction] = useState(undefined)

    const resetAll = useCallback(() => {
        setUser(false);
        setUsername('')
        setUserIdentification('');
    }, [])

    const listener = (event) => {
        setLastKnownUserAction(event.payload.event)
        if(event.payload.event === 'signOut') {
            resetAll();
        }
    }

    const signOut = () => Auth.signOut({global: true})

    Hub.listen('auth', listener)
    
    useEffect(() => {
        try {
            Auth.currentAuthenticatedUser({
                bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
            }).then(user => {
                if(user.username !== username) {
                    setUsername(user.username);
                    setUser(user);
                    setUserIdentification(`${user.attributes.sub}::${user.username}`)
                }
            }).catch(err => resetAll());
        }
        catch (e) {
            resetAll();
        }
    }, [lastKnownUserAction, username, resetAll]);

    return {
        user, 
        userIdentification, 
        username,
        signOut
    };
}