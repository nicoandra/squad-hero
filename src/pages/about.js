import { Heading } from "@aws-amplify/ui-react"
import { useDocumentTitle } from "../hooks/useDocumentTitle"

export default function About() {
    useDocumentTitle('About')
    return (<Heading>About</Heading>)
}