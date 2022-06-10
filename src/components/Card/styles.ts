import styled from "styled-components";

export const Container = styled.div`
    width: 200px;
    height: 200px;
    border: solid 1px var(--border);
    box-shadow: 1px 1px 5px 1px var(--border);
    border-radius: 5px;
    padding: 3px;
    margin-bottom: 12px;

    // display:flex;
    flex-diretion: row;
    justify-content: space-between;

    cursor: pointer;
    transition: 0.3s;

    .student{
        text-transform: uppercase;
    }

`;

export const PersonalInfo = styled.div`
    width: 100%;
    height: 40px;

    p{
        font-size: 14px;
        margin-top: 8px;
    }
`;

export const Courses = styled.div`
    width: 100%;
    height: 40px;
    margin-bottom: 20px;

    h3{
        text-align: left;
        font-size: 14px;
    };
    p{
        font-size: 14px;
    }
`;

export const ButtonArea = styled.div`
    width: 100%;
    height: 20px;
    border-top: solid 1px var(--black);
    display: flex;
    flex-directiom: row;
    margin-top: 6px;
`;

export const Button = styled.div`
    width: 50%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content:center;
    font-size: 15px;

    .details{
        color: var(--secondary);
        text-align: center;
    }
    .accepted{
        color: var(--green);
        text-align: center;
    }

`;