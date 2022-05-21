import { PlayerExperienceBar, PlayerExperienceContainer } from "./PlayerState.styles";

interface PlayerExperienceProps {
    experience: number;
}

const PlayerExperience = ({ experience }: PlayerExperienceProps): React.ReactElement => {
    return (
        <PlayerExperienceContainer>
            <PlayerExperienceBar width={`${experience}%`} />
        </PlayerExperienceContainer>
    );
};

export default PlayerExperience;
