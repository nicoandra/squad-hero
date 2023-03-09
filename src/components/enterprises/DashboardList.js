import { Collection, Card, View, Heading, Button } from "@aws-amplify/ui-react"
import EnterpriseCard from "../EnterpriseCard";
function EnterpriseDashboardList({items}) {
    return (
        <Collection items={items} type="list" direction="row" gap="20px" wrap="nowrap">
            {(item, index) => (
                <EnterpriseCard enterprise={item} index={index}/>
            )}
        </Collection>
    )
}

export default EnterpriseDashboardList