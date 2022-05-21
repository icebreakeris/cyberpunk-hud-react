import { useState } from "react";
import { PlayerState } from "../../components";
import { Quests } from "../../components/Quests";
import { MainContainer } from "./HomePage.styles";

type BackgroundType = "background1" | "background2";

const HomePage = () => {
    const [background, setBackground] = useState<BackgroundType>("background1");

    const handleClick = () => {
        setBackground(background === "background1" ? "background2" : "background1");
    };

    return (
        <MainContainer background={`images/${background}.jpg`}>
            <PlayerState />
            <Quests></Quests>
            <button onClick={handleClick}>Toggle Background</button>
        </MainContainer>
    );
};

export default HomePage;
