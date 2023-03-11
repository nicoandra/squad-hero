import { ScrollView, Grid, View, Flex, Button, CheckboxField } from "@aws-amplify/ui-react"
import { Link, Outlet } from "react-router-dom"
import React, { useState } from 'react';
import JSONViewer from 'react-json-viewer';
import { useAuthUser } from "../hooks/useAuthUser";

function LogOutButton({currentUser}) {
    const { signOut, username } = useAuthUser()
    return (currentUser ? <Button onClick={signOut}>Sign off {username}</Button>: 'No user logged in')
}

function Header({currentUser}) {
    return (
        <View as="header" padding="10px">
            <Flex direction="row" justifyContent="space-around" alignItems="center">
                <Flex>
                    <Link to="/">Home</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/providers">Providers</Link>
                    <Link to="/about">About</Link>
                    <LogOutButton currentUser={currentUser} />
                </Flex>
            </Flex>
        </View>
    )
  }
  

function Footer({currentUser}) {

    const [showUserInfo, setShowUserInfo] = useState(false)

    return (
        <View as="footer" padding="10px">
            <Flex direction="row" justifyContent="space-around" alignItems="center">
                <Flex>
                    <span>SquadHero</span>
                    <CheckboxField checked={showUserInfo} onChange={(e)=>{ setShowUserInfo(e.target.checked); console.log(e.target.value)}}/>
                    {showUserInfo ? <JSONViewer json={currentUser} /> : ''}
                </Flex>
            </Flex>
        </View>
    )
}

export default function Layout() {
    const {user: currentUser} = useAuthUser();
    
    /*
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
            console.log(data);
        }
    }

    Hub.listen('auth', listener)
    */

    return (
        <Grid height="100%" templateRows="auto 1fr">
            <Header currentUser={currentUser} />
            <ScrollView>
                <Outlet />
            </ScrollView>
            <Footer currentUser={currentUser} />
        </Grid>
    )
}