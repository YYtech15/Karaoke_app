interface ScoreListProps {
    scores: Score[];
}

interface Score {
    song: string;
    score: number;
    machine: string;
}

const ScoreList: React.FC<ScoreListProps> = ({ scores }) => {
    return (
        <ul>
            {scores.map((score, index) => (
                <li key={index}>
                    {score.song} で {score.score} 点を獲得！
                </li>
            ))}
        </ul>
    );
};

export default ScoreList;