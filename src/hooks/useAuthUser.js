import { useState, useEffect } from "react"
import { Hub, Auth } from 'aws-amplify';

export default function useAuthUser() {
    const [currentUser, setCurrentUser] = useState(false)
    const [lastKnownUserAction, setLastKnownUserAction] = useState(false)
    
    useEffect(() => {
        prepareUser()
    }, [])

    useEffect(() => {
        prepareUser()
    }, [lastKnownUserAction])

    const prepareUser = async () => {
        Auth.currentAuthenticatedUser({
            bypassCache: true  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
        }).then(user => {
            console.log("CurrentAuthUser", user)
            setCurrentUser(user)
        }).catch(err => {
            setCurrentUser(false)
        });
    }

    const listener = (data)  => {
        if(['signIn', 'signUp', 'signOut'].includes(data.payload.event)) {
            setLastKnownUserAction(data.payload.event);
        }
    }

    Hub.listen('auth', listener)
    
    return {
        username: currentUser ? currentUser.username : false, 
        ...currentUser
    };

}