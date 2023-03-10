import { useState, useEffect } from "react"
import { Hub, Auth } from 'aws-amplify';

export const useAuthUser = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(false);
    const [lastKnownUserAction, setLastKnownUserAction] = useState(undefined)

    const listener = (event) => {
        setLastKnownUserAction(event.payload.event)
        if(event.payload.event === 'signOut') {
            setUser(false);
            setUsername('')
        }
    }

    Hub.listen('auth', listener)
    
    useEffect(() => {
        try {    
            Auth.currentAuthenticatedUser({
                bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
            }).then(user => {
                if(user.username !== username) {
                    setUsername(user.username);
                    setUser(user);
                    console.log(`Load additional settings for user: ${user.username}`);
                }
            }).catch(err => setUser(false));
        }
        catch (e) {
            setUser(false);
        }
    }, [lastKnownUserAction, username]);
    return user
}