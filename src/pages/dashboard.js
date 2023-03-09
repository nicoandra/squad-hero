import { Heading, Authenticator } from '@aws-amplify/ui-react';
import { Route, Routes } from "react-router-dom"
import { ScrollView, View, Flex } from "@aws-amplify/ui-react"
import { Link, Outlet } from "react-router-dom"
import { API } from "aws-amplify";
import { enterprisesByOwner } from "./../graphql/queries";
import { useEffect, useState } from 'react'

import EnterpriseDashboardList from './../components/enterprises/DashboardList'
import DashboardCreateNewEnterprise from './../components/enterprises/DashboardCreateNew'
import DashboardEditEnterprise from './dashboard/enterprises/edit'

function NavBar() {
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
    const [myEnterprises, setMyEnterprises] = useState([])

    const fetchEnterprises = async () => {
        const allEnterprises = await API.graphql({
            query: enterprisesByOwner,
            variables: {
                owner: 'c216b0a4-188a-4062-aa58-8c0d0b27c307::nicoadmin'
            }
        });
        setMyEnterprises(allEnterprises.data.enterprisesByOwner.items)
    }

    useEffect(() => {
        fetchEnterprises()
    } , [])
    

    return (
        <Flex direction={{ base: 'row', medium: 'column' }}>
            <Heading>Enterprises Home</Heading>
            <DashboardCreateNewEnterprise onSuccess={fetchEnterprises}/>
            <Heading>My Enterprises</Heading>
            <EnterpriseDashboardList items={myEnterprises}/>
        </Flex>
    )
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
            <ScrollView>
                <Outlet />
            </ScrollView>
        </Authenticator>            
    )
}

function Dashboard(){
    return (
        <Routes>
          <Route element={<DashboardLayoutWithOutlet />}>
            <Route index element={<ContractsHome />} />
            <Route path="enterprises" element={<EnterprisesHome />} />
            <Route path="enterprises/:enterpriseId" element={<DashboardEditEnterprise />} />
            <Route path="contracts" element={<ContractsHome />} />
          </Route>
        </Routes>
      )
}

export {Dashboard, EnterprisesHome, ContractsHome}