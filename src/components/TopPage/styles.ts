import styled from "styled-components";

export const Container = styled.div`
    width: 100%,
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Occupation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 

    .image{
        widht: 30px;
        height: 30px;
        margin-right: 6px;
    }

    h2{
        font-size: 20px;
        font-family: Poppins;
        weight: 400;
    }
`;

export const Vagas = styled.div`
    
`;