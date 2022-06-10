import styled from "styled-components";

export const Container = styled. div`
    width: 100vw;
    height: 80px;
    background-color: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 1300px;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .icon{
        width: 50px;
        height: 50px;

        :hover{
            transition: 0.4s;
            cursor:pointer;
        }
    }
    .logout{
        width: 70px;
        height: 30px;

        :hover{
            transition: 0.4s;
            cursor:pointer;
        }
    }
`;
