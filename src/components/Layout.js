import { ScrollView, Grid, View, Flex, Button } from "@aws-amplify/ui-react"
import { Link, Outlet } from "react-router-dom"
import { Auth } from "@aws-amplify/auth"
import React, { useEffect, useState } from 'react';
import { Hub } from 'aws-amplify';


function LogOutButton({signOutCallback}) {
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

    const signOut = async () => {
        return Auth.signOut()
    }
    
    return (currentUser ? <Button onClick={signOut}>Log out</Button>: 'No user logged in')
}

function Header() {
    return (
        <View as="header" padding="10px">
            <Flex direction="row" justifyContent="space-around" alignItems="center">
                <Flex>
                    <Link to="/">Home</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/about">About</Link>
                    <LogOutButton />
                    
                </Flex>
            </Flex>
        </View>
    )
  }
  

export default function Layout() {
    return (
        <Grid height="100%" templateRows="auto 1fr">
            <Header />
            <ScrollView>
                <Outlet />
            </ScrollView>
        </Grid>
    )
}