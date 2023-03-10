import { Card, View, Heading, Button } from "@aws-amplify/ui-react"
import { useNavigate } from "react-router-dom";

const EnterpriseCard = ({ enterprise, showEdit = false }) => {
    const navigate = useNavigate()

    const navigateTo = (enterpriseId) => {
        return () => navigate(`/dashboard/enterprises/${enterpriseId}`)
    }    
    return (
        <Card borderRadius="medium" maxWidth="20rem" variation="outlined">
            <View padding="xs">
                <Heading padding="medium">{enterprise.name}</Heading>
                {showEdit ? <Button onClick={navigateTo(enterprise.id)}>Edit</Button> : ''}
            </View>
        </Card>)
}

export default EnterpriseCard;