import { Collection } from "@aws-amplify/ui-react"
import EnterpriseCard from "../EnterpriseCard";
import { API } from "aws-amplify";
import { enterprisesByOwner } from "../../graphql/queries";
import { useEffect, useState } from 'react'

function EnterpriseDashboardList() {
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