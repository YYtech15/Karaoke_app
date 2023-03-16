import { Score, deleteScore } from '../../utils/apiClient';
import ScoreItem from './ScoreItem';

interface ScoreListProps {
    scores: Score[];
    onScoreDeleted: (scoreId: number) => void;
}

const ScoreList: React.FC<ScoreListProps> = ({ scores, onScoreDeleted }) => {
    const handleDelete = async (scoreId: number) => {
        await deleteScore(scoreId);
        onScoreDeleted(scoreId);
    };

    return (
        <ul>
            {scores.map((score) => (
                <ScoreItem key={score.id} score={score} onDelete={handleDelete} />
            ))}
        </ul>
    );
};

export default ScoreList;