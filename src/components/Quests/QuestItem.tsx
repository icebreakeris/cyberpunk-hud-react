import { FilledPolygonSvg, PolygonSvg } from "../svgs/Polygon";
import { QuestObjective, QuestObjectiveIconContainer } from "./Quests.styles";

interface QuestItemProps {
    selected?: boolean;
    children?: React.ReactNode;
}

const QuestItem = ({ selected, children }: QuestItemProps): React.ReactElement => {
    return (
        <QuestObjective selected={selected}>
            <QuestObjectiveIconContainer>
                {selected ? (
                    <>
                        <FilledPolygonSvg />
                        <p>!</p>
                    </>
                ) : (
                    <PolygonSvg />
                )}
            </QuestObjectiveIconContainer>
            {children}
        </QuestObjective>
    );
};

export default QuestItem;
