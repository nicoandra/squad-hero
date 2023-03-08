
import CreateEnterprise from './../../ui-components/CreateEnterprise';
import { Heading } from '@aws-amplify/ui-react';
import { API } from "aws-amplify";
import { updateEnterprise } from './../../graphql/mutations';
import { getEnterprise } from './../../graphql/queries';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function DashboardEditEnterprise({ onSuccess, onError}) {
    
    const [enterpriseData, setEnterpriseData] = useState(false)
    const { enterpriseId } = useParams();

    console.log("Reading data of", enterpriseId)

    const query = async () => {
        console.log("Try to perform query with", enterpriseId)
        if(!enterpriseId) {
            return; 
        }
        const updatedEnterprise = await API.graphql({
            query: getEnterprise,
            variables: {id: enterpriseId}
        }).then((r) => {
            setEnterpriseData(r.data.getEnterprise);
            console.log(r)
        });        
    }

    const mutation = async (fields) => {
        const updatedEnterprise = await API.graphql({
            query: updateEnterprise,
            variables: {
                input: {
                    "name": fields['Field1'],
                    "officePhone": fields['Field0'],
                    "cellPhone": fields['Field2'],
                    "email": fields['Field3']
                }
            }
        }).then((r) => {
            onSuccess()
        });
    }


    useEffect(()=> {
        query();
    }, [enterpriseId]);

    return (
        <>
            <Heading >Update Enterprise</Heading>
            <CreateEnterprise onSubmit={mutation}/>
        </>
    )
}

export default DashboardEditEnterprise