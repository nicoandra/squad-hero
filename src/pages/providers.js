import { Collection, Heading, View } from "@aws-amplify/ui-react"

import { API } from "aws-amplify";
import { listEnterprises } from './../graphql/queries';
import { useState, useEffect, useCallback } from 'react'
import EnterpriseCard from './../components/EnterpriseCard'

export default function Providers() {
    const [providers, setProviders] = useState([])

    const query = useCallback(async () => {
        await API.graphql({
            query: listEnterprises,
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
                {(item, index) => {
                    return (
                        <EnterpriseCard enterprise={item} key={index}/>
                    )
                }}
            </Collection>
        </View>
    )
}