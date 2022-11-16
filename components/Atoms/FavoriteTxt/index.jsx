import styled from "styled-components"
import Link from "next/link"

const Text = styled.div`
    font-size: 1em;
    a{
        font-weight: 600;
        font-size: 1.2em;
    }
   a:hover{
    text-decoration: underline;
    color: #108928;
   }
}
`

export default function FavoriteTxt({ title, location, href }) {
    return (
        <Text>
            <Link href={href}>
            <a>{title}</a>
            </Link>
            <div>{location}</div>
        </Text>
    )
}