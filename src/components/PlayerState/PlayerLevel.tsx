import { PolygonSvg } from "../svgs/Polygon";
import { PlayerLevelContainer } from "./PlayerState.styles";

interface PlayerLevelProps {
    level?: number;
}

const PlayerLevel = ({ level }: PlayerLevelProps): React.ReactElement => {
    return (
        <PlayerLevelContainer>
            <PolygonSvg />
            {level ?? 0}
        </PlayerLevelContainer>
    );
};

export default PlayerLevel;
