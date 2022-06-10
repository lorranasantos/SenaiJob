import React from 'react'
import {
    Container, 
    Content,
} from './styles'
import Menu from '../../assets/menu.png';

export function Header(){
    return(
        <Container>
            <Content>
                <div className="icon">
                    <img src={Menu} alt="Menu"/>
                </div>
                <div className="logout">
                    SAIR
                </div>
            </Content>

        </Container>
    );
}

export default Header;
