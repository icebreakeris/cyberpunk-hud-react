import PlayerAmmo from "./PlayerAmmo";
import PlayerExperience from "./PlayerExperience";
import PlayerHealth from "./PlayerHealth";
import PlayerLevel from "./PlayerLevel";
import PlayerRam from "./PlayerRam";
import { PlayerStateColumn, PlayerStateContainer } from "./PlayerState.styles";

const PlayerState = () => {
    return (
        <PlayerStateContainer>
            <PlayerStateColumn fitContent>
                <PlayerLevel level={20} />
            </PlayerStateColumn>

            <PlayerStateColumn>
                <PlayerExperience experience={58} />
                <PlayerHealth health={15} />
                <PlayerRam ramCount={10} />
            </PlayerStateColumn>

            <PlayerStateColumn fitContent>
                <PlayerAmmo currentAmmo={10} totalAmmo={399} />
            </PlayerStateColumn>
        </PlayerStateContainer>
    );
};

export default PlayerState;
