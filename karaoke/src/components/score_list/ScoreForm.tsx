import { useState } from "react";
import { createScore, Score } from "../../utils/apiClient";

interface ScoreFormProps {
    onScoreCreated: (score: Score) => void;
    onClose: () => void;
}

const ScoreForm: React.FC<ScoreFormProps> = ({ onScoreCreated, onClose }) => {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    // const [songSearchResults, setSongSearchResults] = useState([]);
    // const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState('');
    const [machine, setMachine] = useState('DAM');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (score === null) {
            setError('得点を入力してください。');
            return;
        }

        const newScore: Score = {
            id: Date.now(),
            title,
            artist,
            score: parseFloat(score),
            machine,
        };

        try {
            // await createScore(newScore);
            onScoreCreated(newScore);
            // setTitle("");
            // setArtist("");
            // setScore("");
            onClose();
        } catch (error) {
            console.error(error);
        }
    };


    const handleScoreChange = (value: string) => {
        const parsedScore = parseFloat(value);
        setScore(value);

        if (parsedScore < 0 || parsedScore > 100) {
            setError('得点は0.00〜100.00の範囲で入力してください。');
        } else {
            setError('');
        }
    };

    return <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="mb-6">
            <label htmlFor="title" className="text-lm font-semibold">
                曲名
            </label>
            <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border border-gray-300 px-3 py-2 mt-1 w-full"
            />
        </div>
        <div className="mb-6">
            <label htmlFor="artist" className="text-lm font-semibold">
                アーティスト名
            </label>
            <input
                type="text"
                id="artist"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                className="border border-gray-300 px-3 py-2 mt-1 w-full"
            />
        </div>
        <div className="mb-6">
            <label htmlFor="score" className="text-lm font-semibold">
                得点
            </label>
            <input
                value={score}
                onChange={(e) => handleScoreChange(e.target.value)}
                type="number"
                id="score"
                min="0"
                max="100"
                step="0.01"
                className="p-2 border border-gray-300 rounded"
            />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex flex-col space-y-2 mb-6">
            <label htmlFor="machine" className="text-sm font-semibold">
                カラオケの機種
            </label>
            <select
                value={machine}
                onChange={(e) => setMachine(e.target.value)}
                className="p-2 border border-gray-300 rounded"
                id="machine"
            >
                <option value="DAM">DAM</option>
                <option value="JoySound">JoySound</option>
                <option value="その他">その他</option>
            </select>
        </div>
        <button
            type="submit"
            className="bg-blue-500 text-white my-2 py-2 px-4 rounded"
        >
            追加
        </button>
    </form>
};

export default ScoreForm;