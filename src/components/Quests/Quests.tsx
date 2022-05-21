import QuestItem from "./QuestItem";
import { QuestsContainer, QuestsContent, QuestsHeader } from "./Quests.styles";

const Quests = (): React.ReactElement => {
    return (
        <QuestsContainer>
            <QuestsHeader>This is the header</QuestsHeader>
            <QuestsContent>
                <QuestItem selected>This is the primary objective</QuestItem>
                <QuestItem>This is the secondary objective a very long quest title</QuestItem>
            </QuestsContent>
        </QuestsContainer>
    );
};

export default Quests;
