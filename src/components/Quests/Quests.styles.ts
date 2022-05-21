import styled from "styled-components";

interface QuestProps {
    selected?: boolean;
}

const QuestElement = styled.div<QuestProps>`
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 3px;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.05);
    padding: 5px;
    width: fit-content;
`;

export const QuestsContainer = styled.div`
    position: absolute;
    top: 7%;
    right: 5%;
    color: white;
    transform: rotate3d(0, 1, 1, -6deg) skewX(-6deg);
    font-size: 20px;
`;

export const QuestsHeader = styled(QuestElement)`
    color: red;
`;

export const QuestsContent = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: column;
`;

export const QuestObjective = styled(QuestElement)`
    color: ${(props) => (props.selected ? "yellow" : "red")};
    margin-top: 5px;
    max-width: 300px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 10px;

    svg {
        height: 25px;
        width: 25px;
    }
`;

export const QuestObjectiveIconContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        position: absolute;
        color: black;
    }
`;
