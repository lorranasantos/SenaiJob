import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 2000px;

    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;

`;

export const Content = styled.div`
    width: 1300px;
    height: 1300px;
    border: solid 1px #000;
    border-radius: 5px;
    margin-top:25px;
    background-color: var(--background);
`;


export const Information = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
`;

export const About = styled.div`
    widht: 45%;
    height: 100%;
        
`;

export const Observation= styled.div`
    width: 50%;
    height: 100%;
`;

export const Requirements = styled.div`
    width: 100%;
    height: fit-content;
    

    h2{
        font-size: 16px;
    };

    .hightlight{
        min-width: 150px;
        min-height: 40px;
        width: 100%;
        padding: 5px;

        border-radius: 6px;
        background-color: var(--secondary);
        margin-bottom: 5px;
    }

    p{
        font-size: 16px;
    }
`;

export const Body = styled.div`
    width: 96%;
    height: 750px;
    border: solid 1px var(--black);
    border-radius: 5px;
    margin: 20px;
    align-self:center;

    h3{
        margin-top: 10px;
        margin-left:12px;
    }
`;

export const Title = styled.div`
    width:100%;
    height: 40px;

    p{
        text-align: center;
        font-size: 20px;

        span{
            color: #43a047;
            font-weight: 500;
        }
    }
`;

export const New = styled.div`
    width: 95%;
    border-bottom: solid 1px var(--black);
    margin-left: 12px;

    h3{
        color: #43a047;
        margin-left:12px;
    }
    p{
        margin-left: 12px;
    }
`;

export const CardArea = styled.div`
    width: 100%;
    height: 350px;
    padding: 12px;

    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
`;