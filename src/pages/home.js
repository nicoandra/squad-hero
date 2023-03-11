import { Heading, View } from "@aws-amplify/ui-react"
import { useAuthUser } from "../hooks/useAuthUser"

export default function Home() {
    const { username } = useAuthUser()
    return (
        <View>
            <Heading>Home Page</Heading>
            Welcome {username ? username : 'visitor'}
        </View>
    )
}