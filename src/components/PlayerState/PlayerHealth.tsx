import { PlayerHealthBar, PlayerHealthContainer } from "./PlayerState.styles";

interface PlayerHealthProps {
    health: number;
}

const PlayerHealth = ({ health }: PlayerHealthProps): React.ReactElement => {
    return (
        <PlayerHealthContainer>
            <PlayerHealthBar width={`${health?.toString()}%`} />
        </PlayerHealthContainer>
    );
};

export default PlayerHealth;
