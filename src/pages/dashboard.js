import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';

function Dashboard() {
    return (<Heading>Dashboard</Heading>)
}

export default withAuthenticator(Dashboard)