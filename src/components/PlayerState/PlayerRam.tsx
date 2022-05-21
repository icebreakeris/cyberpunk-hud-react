import { RamSvg } from "../svgs/Ram";
import { PlayerRamContainer } from "./PlayerState.styles";

interface PlayerRamProps {
    ramCount: number;
}

const PlayerRam = ({ ramCount }: PlayerRamProps): React.ReactElement => {
    return (
        <PlayerRamContainer>
            {[...Array(ramCount)].map((_, i) => {
                return <RamSvg key={i} />;
            })}
        </PlayerRamContainer>
    );
};

export default PlayerRam;
