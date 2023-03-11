import { Collection, Heading, View } from "@aws-amplify/ui-react"
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/auth';

import { API } from "aws-amplify";
import { listPublicEnterprises } from './../graphql/custom.queries';
import { useState, useEffect, useCallback } from 'react'
import EnterpriseCard from './../components/EnterpriseCard'

export default function Providers() {
    const [providers, setProviders] = useState([])

    const query = useCallback(async () => {
        await API.graphql({
            query: listPublicEnterprises,
            authMode: GRAPHQL_AUTH_MODE.API_KEY
        }).then((r) => {
            setProviders((p)=> [...p, ...r.data.listEnterprises.items]);
        });        
    }, [])
    
    useEffect(() => {
        query()
    }, [query])

    useEffect(() => {
        setProviders([])
    }, [])

    return (
        <View>
            <Heading>Known Providers</Heading>
            <Collection items={providers} type="list" direction="column" gap="20px" wrap="nowrap">
                {(item, index) => (<EnterpriseCard enterprise={item} key={index}/>)}
            </Collection>
        </View>
    )
}