import { Collection, Card, View, Heading, Button } from "@aws-amplify/ui-react"
import { useNavigate } from "react-router-dom";

function EnterpriseDashboardList({items}) {

    const navigate = useNavigate()

    const navigateTo = (enterpriseId) => {
        return () => navigate(`/dashboard/enterprises/${enterpriseId}`)
    }
    return (
        <Collection items={items} type="list" direction="row" gap="20px" wrap="nowrap">
            {(item, index) => (
                <Card key={index} borderRadius="medium" maxWidth="20rem" variation="outlined">
                    <View padding="xs">
                        <Heading padding="medium">{item.name}</Heading>
                        <Button onClick={navigateTo(item.id)}>Edit</Button>
                    </View>
                </Card>
            )}
        </Collection>
    )
}

export default EnterpriseDashboardList