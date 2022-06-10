import React from 'react'

import {
    Container, 
    Occupation,
    Vagas, 
} from './styles'

export function TopPage(){
    return(
        <Container>
            <Occupation>
                <div className="image">
                    &#8592;
                </div>
                <h2>
                    Emprego - Auxiliar de manutenção manutenção predial/industrial
                </h2>   
            </Occupation>
            <Vagas>
                <p>
                    1 vaga
                </p>
                <div className="image">
                </div>        
            </Vagas>
        </Container>
    );
}

export default TopPage;