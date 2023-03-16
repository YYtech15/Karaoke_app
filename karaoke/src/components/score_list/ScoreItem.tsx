import { useState } from 'react';
import { Score } from '../../utils/apiClient';

interface ScoreItemProps {
    score: Score;
    onDelete: (scoreId: number) => void;
}

const ScoreItem: React.FC<ScoreItemProps> = ({ score, onDelete }) => {
    const [showDetails, setShowDetails] = useState(false);

    const handleShowDetails = () => {
        setShowDetails(true);
    };

    const handleCloseDetails = () => {
        setShowDetails(false);
    };

    const handleDelete = () => {
        onDelete(score.id);
    };

    return (
        <>
            <li className="cursor-pointer py-2" onClick={handleShowDetails}>
                <div className="text-lg font-semibold">{score.title}</div>
                <div className="text-gray-600 italic">{score.artist}</div>
            </li>
            {showDetails && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    onClick={handleCloseDetails}
                >
                    <div
                        className="bg-white p-8 rounded shadow-md max-w-md mx-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-2xl font-bold mb-2">{score.title}</h2>
                        <h3 className="text-xl font-semibold mb-4">{score.artist}</h3>
                        <h3 className="text-lg font-bold mb-6">{score.score}</h3>
                        {/* <p>歴代の得点: {score.scoreHistory.join(', ')}</p>
    <p>歌詞: {score.lyrics}</p> */}
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={handleDelete}
                                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                            >
                                削除
                            </button>
                            <button
                                onClick={handleCloseDetails}
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            >
                                閉じる
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ScoreItem;