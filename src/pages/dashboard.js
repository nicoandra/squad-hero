import { Heading, Authenticator } from '@aws-amplify/ui-react';
import { Route, Routes } from "react-router-dom"
import { ScrollView, Grid, View, Flex, Button } from "@aws-amplify/ui-react"
import { Link, Outlet } from "react-router-dom"
import { useParams, useOutletContext } from "react-router-dom"

function NavBar() {
    const routerContext = useOutletContext()
    console.log("The navbar", routerContext)
    return (
        <View as="header" padding="10px">
            <Flex direction="row" justifyContent="space-around" alignItems="center">
                <Flex>
                    <Link to="/dashboard/enterprises">Enterprises</Link>
                    <Link to="/dashboard/contracts">Contracts</Link>
                </Flex>
            </Flex>
        </View>        
    )
}

function EnterprisesHome() {
    return <Heading>Enterprises Home</Heading>
}

function ContractsHome() {
    return <Heading>Contracts Home</Heading>
}

function DashboardHeader () {
    return (
        <>
            <Heading>Dashboard</Heading>
            <NavBar />
        </>
    )

}


function DashboardLayoutWithOutlet () {
    return (
        <Authenticator>
            <DashboardHeader />
            <Outlet />
        </Authenticator>            
    )
}


function Dashboard(){
    return (
        <Routes>
          <Route element={<DashboardLayoutWithOutlet />}>
            <Route index element={<ContractsHome />} />
            <Route path="enterprises" element={<EnterprisesHome />} />
            <Route path="contracts" element={<ContractsHome />} />
          </Route>
        </Routes>
      )
}

export {Dashboard, EnterprisesHome, ContractsHome}