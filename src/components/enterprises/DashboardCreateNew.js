
import CreateEnterprise from './../../ui-components/CreateEnterprise';
import { Heading } from '@aws-amplify/ui-react';
import { API } from "aws-amplify";
import { createEnterprise } from './../../graphql/mutations';

function DashboardCreateNewEnterprise({ onSuccess, onError}) {
    const createNewEnterprise = async (fields) => {
        await API.graphql({
            query: createEnterprise,
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

    return (
        <>
            <Heading >Create new Enterprise</Heading>
            <CreateEnterprise onSubmit={createNewEnterprise} />
        </>
    )
}

export default DashboardCreateNewEnterprise