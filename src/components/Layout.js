import { ScrollView, Grid, View, Flex, Button } from "@aws-amplify/ui-react"
import { Link, Outlet, Navigate } from "react-router-dom"
import { useAuthenticator, Authenticator } from '@aws-amplify/ui-react';
import { Auth } from "@aws-amplify/auth"
import React, { useEffect, useState } from 'react';


function LogOutButton({signOutCallback}) {
    const [currentUser, setCurrentUser] = useState(false)
    
    useEffect(() => {
        prepareUser()
    }, [])

    const prepareUser = async () => {
        Auth.currentAuthenticatedUser({
            bypassCache: true  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
        }).then(user => {
            console.log('User is', user)
            setCurrentUser(user)
        }).catch(err => {
            setCurrentUser(false)
        });
    }

    const signOut = async () => {
        return Auth.signOut().then(()=> {})
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