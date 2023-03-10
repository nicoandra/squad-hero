import { Heading, View } from "@aws-amplify/ui-react"
import useAuthUser from "../hooks/useAuthUser"

export default function Home() {
    const user = useAuthUser()
    return (
        <View>
            <Heading>Home Page</Heading>
            Welcome {user ?  user.username : 'visitor'}
        </View>
    )
}