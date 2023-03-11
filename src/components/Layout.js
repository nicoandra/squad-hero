import { ScrollView, Grid, View, Flex, Button, CheckboxField, useTheme } from "@aws-amplify/ui-react"
import { Link, Outlet } from "react-router-dom"
import React, { useState } from 'react';
import JSONViewer from 'react-json-viewer';
import { useAuthUser } from "../hooks/useAuthUser";

function LogOutButton({currentUser}) {
    const { signOut, username } = useAuthUser()
    return (currentUser ? <Button onClick={signOut}>Sign off {username}</Button>: 'No user logged in')
}

function Header({currentUser}) {
    const { tokens } = useTheme();

    return (
        <View as="header" padding="10px" backgroundColor={tokens.colors.blue[10]}>
            <Flex direction="row" justifyContent="center">
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/providers">Providers</Link>
                <Link to="/about">About</Link>
                <LogOutButton currentUser={currentUser} />
            </Flex>
        </View>
    )
  }
  

function Footer({currentUser}) {
    const { tokens } = useTheme();
    const [showUserInfo, setShowUserInfo] = useState(false)

    return (
        <View as="footer" padding="10px" backgroundColor={tokens.colors.blue[10]}>
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
    return (
        <Grid height="100%" templateRows="auto 1fr">
            <Header currentUser={currentUser} />
            <View padding="10px">
                <ScrollView>
                    <Outlet />
                </ScrollView>
            </View>
            <Footer currentUser={currentUser} />
        </Grid>
    )
}