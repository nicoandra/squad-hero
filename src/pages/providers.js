import { Collection, Heading, View, Loader, Grid } from "@aws-amplify/ui-react"
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/auth';

import { API } from "aws-amplify";
import { listPublicEnterprises } from './../graphql/custom.queries';
import { useState, useEffect, useCallback } from 'react'
import EnterpriseCard from './../components/EnterpriseCard'

import { MapView } from '@aws-amplify/ui-react';


export default function Providers() {
    const [providers, setProviders] = useState([])
    const [loading, setIsLoading] = useState(true)

    const query = useCallback(async () => {
        await API.graphql({
            query: listPublicEnterprises,
            authMode: GRAPHQL_AUTH_MODE.API_KEY
        }).then((r) => {
            setIsLoading(false);
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
                <Grid 
                    templateColumns="1fr 3fr"
                    columnGap="0.5rem"
                >
                    <>{ loading ? <Loader /> :  <Collection items={providers} type="list" direction="column" gap="20px" wrap="nowrap">
                    {(item, index) => (<EnterpriseCard enterprise={item} key={index}/>)}
                    </Collection>
                    }</>
                    <MapView initialViewState={{
                        latitude: 45.524952,
                        longitude: -73.645960,
                        zoom: 6,
                    }}/>
                </Grid>
        </View>
    )
}