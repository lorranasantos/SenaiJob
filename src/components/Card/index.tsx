import React from 'react'
import { Container, PersonalInfo, Courses, ButtonArea, Button } from './styles';


type Props ={
    student: string,
    age: string,
    location: string,
    course: string
}

export function Card({student, age, location, course}: Props){
    return(
        <Container>
            <p><span className="student">{student}</span></p>

            <PersonalInfo>
                <p>
    <strong>{age}</strong>anos, mora em <strong>{location}</strong>
                </p>
            </PersonalInfo>
            <Courses>
                <h3>
                Último curso:
                </h3>
                <p>
                    {course}
                </p>
            </Courses>
            <ButtonArea>
                <Button>
                    <span className="details">Detalhes</span>
                </Button>
                <Button>
                    <span className="accepted">Contratatei!</span>
                </Button>
            </ButtonArea>
        </Container>
    )
}

export default Card;