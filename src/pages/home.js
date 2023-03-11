import { Heading, View } from "@aws-amplify/ui-react"
import { useAuthUser } from "../hooks/useAuthUser"
import { useDocumentTitle } from "../hooks/useDocumentTitle"

export default function Home() {
    const { username } = useAuthUser()
    useDocumentTitle('')
    return (
        <View>
            <Heading>Home Page</Heading>
            Welcome {username ? username : 'visitor'}
        </View>
    )
}