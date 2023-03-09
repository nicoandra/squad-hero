import { Collection, Card, View, Heading, Button } from "@aws-amplify/ui-react"
import { useNavigate } from "react-router-dom";

const EnterpriseCard = ({ enterprise, index}) => {
    const navigate = useNavigate()

    const navigateTo = (enterpriseId) => {
        return () => navigate(`/dashboard/enterprises/${enterpriseId}`)
    }    
    return (
        <Card key={index} borderRadius="medium" maxWidth="20rem" variation="outlined">
            <View padding="xs">
                <Heading padding="medium">{enterprise.name}</Heading>
                <Button onClick={navigateTo(enterprise.id)}>Edit</Button>
            </View>
        </Card>)
}

export default EnterpriseCard;