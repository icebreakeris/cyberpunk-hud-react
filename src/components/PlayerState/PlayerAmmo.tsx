import { PlayerAmmoContainer, PlayerAmmoCurrent, PlayerAmmoTotal } from "./PlayerState.styles";

interface PlayerAmmoProps {
    currentAmmo?: number;
    totalAmmo?: number;
}

const PlayerAmmo = ({ currentAmmo, totalAmmo }: PlayerAmmoProps): React.ReactElement => {
    return (
        <PlayerAmmoContainer>
            <PlayerAmmoCurrent>{currentAmmo ?? 0}</PlayerAmmoCurrent>
            <PlayerAmmoTotal>{totalAmmo ?? 0}</PlayerAmmoTotal>
        </PlayerAmmoContainer>
    );
};

export default PlayerAmmo;
