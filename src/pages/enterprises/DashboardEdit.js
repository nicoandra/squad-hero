
import UpdateEnterprise from '../../ui-components/UpdateEnterprise';
import { Heading } from '@aws-amplify/ui-react';
import { API } from "aws-amplify";
import { updateEnterprise } from '../../graphql/mutations';
import { getEnterprise } from '../../graphql/queries';
import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'

function DashboardEditEnterprise() {
    
    const [ enterpriseData, setEnterpriseData ] = useState(false)
    const [ receivedEnterpriseId, setReceivedEnterpriseId ] = useState(false)
    const { enterpriseId } = useParams();



    const query = useCallback(async () => {
        if(!enterpriseId) {
            return; 
        }
        await API.graphql({
            query: getEnterprise,
            variables: {id: receivedEnterpriseId || enterpriseId}
        }).then((r) => {
            setEnterpriseData(r.data.getEnterprise);
            setReceivedEnterpriseId(r.data.getEnterprise.id)
            console.log(r.data.getEnterprise)
        });        
    }, [enterpriseId, receivedEnterpriseId])

    const mutation = async (fields) => {
        await API.graphql({
            query: updateEnterprise,
            variables: {
                input: {
                    "id": receivedEnterpriseId,
                    "name": fields['name'],
                    "officePhone": fields['officePhone'],
                    "cellPhone": fields['cellPhone'],
                    "email": fields['email']
                }
            }
        }).then((r) => {
            console.log("After update", r)
            query()
        });
    }

    useEffect(()=> {
        query();
    }, [enterpriseId, query]);



    return (
        <>
            <Heading>Update Enterprise</Heading>
            {receivedEnterpriseId && enterpriseData ? <UpdateEnterprise initialData={enterpriseData} onSubmit={mutation} /> : ''}
        </>
    )
}

export default DashboardEditEnterprise