import { Collection } from "@aws-amplify/ui-react"
import EnterpriseCard from "../EnterpriseCard";
import { API } from "aws-amplify";
import { enterprisesByOwner } from "../../graphql/queries";
import { useEffect, useState, useCallback } from 'react'
import { useAuthUser } from './../../hooks/useAuthUser'

function EnterpriseDashboardList() {
    const [myEnterprises, setMyEnterprises] = useState([])
    const { userIdentification } = useAuthUser()

    const fetchEnterprises = useCallback(async () => {

        if(!userIdentification) {
            setMyEnterprises([])    
            return ;
        }
        const allEnterprises = await API.graphql({
            query: enterprisesByOwner,
            variables: {
                owner: userIdentification
            }
        });
        setMyEnterprises(allEnterprises.data.enterprisesByOwner.items)
    }, [userIdentification])

    useEffect(() => {
        fetchEnterprises()
    } , [fetchEnterprises])

    return (<>
        <Collection items={myEnterprises} type="list" direction="row" gap="20px" wrap="nowrap">
            {(item, index) => (
                <EnterpriseCard enterprise={item} key={index} showEdit={true} />
            )}
        </Collection>
        </>
    )
}

export default EnterpriseDashboardList