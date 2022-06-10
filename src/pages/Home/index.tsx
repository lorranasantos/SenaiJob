import React from "react";
import Header from "../../components/Header";
import TopPage from "../../components/TopPage";


import 
{ 
    Container,
    Content,
    Information,
    About,
    Observation,
    Requirements,
    Body,
    Title,
    New,
    CardArea
} from "./styles";
import { JobInformation } from "../../components/JobInformation";
import Card from "../../components/Card";


export function Home(){
    return(
        <Container>
            <Header/>
            <Content>
                <TopPage/>
                <Information>
                    <About>
                        <JobInformation title="Responsabilidades e atribuições" content="aaaa" />
                        <JobInformation title="Local de Trabalho" content="aaaa" />
                        <JobInformation title="Horário"  content="Lorem ipsum dolor sit amet consectetur adipisicing"/>
                        <JobInformation title="Benefícios" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. "/>            
                    </About>
                    <Observation>
                        <Requirements>
                            <h2>
                                Pré Requisitos
                            </h2>
                            <div className="hightlight">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum numquam, architecto consectetur accusamus perspiciatis 
                                </p>
                            </div>
                            <div className="hightlight">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                </p>
                            </div>
                        </Requirements>
                        <JobInformation title="Salário" content="1200"/> 
                        <JobInformation title="Observações" content="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>    
                    </Observation>
                </Information> 
                <Body>
                    <Title>
                        <p>
                            <span>15</span> candidatos de <span>407</span> alunos
                        </p>
                    </Title>
                    <New>
                        <h3>
                            Novos:
                        </h3>
                        <p>
                            Ainda não temos nenhhum novo candidato
                        </p>
                    </New>
                    <h3>
                        Vistos
                    </h3>
                    <CardArea>
                        <Card student="Ana da silva" age="33" location="Santana de Parnaíba" course="Tecnologia da Informação - Excel Completo 2022 "/>
                        <Card student="Ana da silva" age="33" location="Santana de Parnaíba" course="Tecnologia da Informação - Excel Completo 2022 "/>
                        <Card student="Ana da silva" age="33" location="Santana de Parnaíba" course="Tecnologia da Informação - Excel Completo 2022 "/>
                        <Card student="Ana da silva" age="33" location="Santana de Parnaíba" course="Tecnologia da Informação - Excel Completo 2022 "/>
                        <Card student="Ana da silva" age="33" location="Santana de Parnaíba" course="Tecnologia da Informação - Excel Completo 2022 "/>
                        <Card student="Ana da silva" age="33" location="Santana de Parnaíba" course="Tecnologia da Informação - Excel Completo 2022 "/>

                    </CardArea>
                </Body>
            </Content>
        </Container>
    );
}

export default Home;