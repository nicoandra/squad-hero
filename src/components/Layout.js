import { ScrollView, Grid, View, Flex } from "@aws-amplify/ui-react"
import { Link, Outlet } from "react-router-dom"


function Header() {
    return (
        <View as="header" padding="10px">
        <Flex direction="row" justifyContent="space-around" alignItems="center">
            <Flex>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/about">About</Link>
            </Flex>
        </Flex>
        </View>
    )
  }
  

export default function Layout() {
    return (
        <Grid height="100%" templateRows="auto 1fr">
            <Header />
            <Outlet />
        </Grid>
    )
}