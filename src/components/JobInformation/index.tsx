import React from "react";
import
{ 
    Container

} from "./styles";


type Props = {
    title: string,
    content: string,

}

export function JobInformation({title, content }: Props){
    return(
        <Container>
            <h2>
                {title}
            </h2>
            <p>
                {content}
            </p>
        </Container>
    )
}