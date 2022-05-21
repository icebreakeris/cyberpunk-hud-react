import styled from "styled-components";
import { Colours } from "../../styles/variables";

interface PlayerStateColumnProps {
    fitContent?: boolean;
}

interface BarElementProps {
    width?: string;
}

export const PlayerStateContainer = styled.div`
    color: red;
    position: absolute;
    top: 7%;
    left: 5%;
    display: flex;
    flex-direction: row;
    width: 525px;
    gap: 10px;
    transform: rotate3d(0, 1, 1, 6deg) skewX(6deg);
`;

export const PlayerStateColumn = styled.div<PlayerStateColumnProps>`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: ${(props) => (props.fitContent ? "fit-content" : "100%")};
`;

export const PlayerHealthContainer = styled.div`
    &:before {
        content: "";
        width: 100%;
        height: 20px;
        background-color: rgba(175, 0, 0, 0.75);
        position: absolute;
        border-bottom: 2px solid rgba(175, 0, 0, 0.75);
        clip-path: polygon(100% 0, 100% 50%, 95% 100%, 0 100%, 0 0);
    }

    position: relative;
    width: 100%;
    height: 20px;
    z-index: 200;
`;

export const PlayerHealthBar = styled.div<BarElementProps>`
    position: absolute;
    height: 100%;
    width: ${(props) => props.width ?? "100%"};
    left: 0;
    background-color: ${Colours.LightRed};
    box-shadow: -1px -2px 15px 2px ${Colours.LightRed};
`;

export const PlayerLevelContainer = styled.div`
    display: flex;
    position: relative;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    color: white;
    filter: drop-shadow(-1px -1px 3px white);

    svg {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }
`;

export const PlayerAmmoContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-shadow: -3px -3px 10px red;
`;

const PlayerAmmoText = styled.h1`
    font-weight: bold;
    font-size: 30px;
`;

export const PlayerAmmoCurrent = styled(PlayerAmmoText)`
    font-size: 35px;
`;

export const PlayerAmmoTotal = styled(PlayerAmmoText)`
    font-size: 22px;
    margin-bottom: 24px;
`;

export const PlayerExperienceContainer = styled.div`
    height: 5px;
    width: 100%;
    z-index: 500;
    background-color: rgba(200, 200, 200, 0.75);
`;

export const PlayerExperienceBar = styled.div<BarElementProps>`
    box-shadow: -1px -2px 20px 1px white;
    height: 100%;
    width: ${(props) => props.width ?? "100%"};
    background-color: white;
`;

export const PlayerRamContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 25px;
    gap: 1px;

    svg {
        width: 8px;
        height: 20px;
        color: rgba(225, 225, 225, 0.75);
        filter: drop-shadow(-5px -5px 20px white);
    }
`;
