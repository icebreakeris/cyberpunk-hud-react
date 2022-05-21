import styled from "styled-components";

interface MainContainerProps {
    background?: string;
}

export const MainContainer = styled.div<MainContainerProps>`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-image: url(${(props) => props.background ?? "images/background.jpg"});
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
`;
