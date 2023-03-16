import React, { useEffect, useState } from 'react';
import { Score, createScore } from '../../utils/apiClient';
import { searchSongs } from '../../utils/apiClient';

interface SearchResult {
    id: number;
    title: string;
    artist: {
        name: string;
    };
}

const ScoreForm: React.FC = () => {
    const [song, setSong] = useState('');
    const [songSearchResults, setSongSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState<number | ''>('');
    const [machine, setMachine] = useState('DAM');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const parsedScore = Number(score);
        if (song && score !== '' && parsedScore >= 0 && parsedScore <= 100) {
            try {
                // 型アノテーションを追加(createScore関数に渡すデータが正しい形式であることを保証)
                const newScore: Score = { song, score: parsedScore, machine };
                await createScore(newScore);
                setSong('');
                setScore('');
                setError('');
            } catch (error) {
                console.error("Error submitting score:", error);
            }
        }
    };

    const handleScoreChange = (value: string) => {
        const parsedScore = parseFloat(value);
        setScore(parsedScore);

        if (parsedScore < 0 || parsedScore > 100) {
            setError('得点は0.00〜100.00の範囲で入力してください。');
        } else {
            setError('');
        }
    };

    useEffect(() => {
        if (song) {
            searchSongs(song).then((results) => setSongSearchResults(results));
        } else {
            setSongSearchResults([]);
        }
    }, [song]);

    return (
        <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md mx-auto mt-8 space-y-4">
            <div className="relative flex flex-col space-y-2">
                <label htmlFor="song" className="text-sm font-semibold">
                    曲名:
                </label>
                <input
                    value={song}
                    onChange={(e) => setSong(e.target.value)}
                    type="text"
                    id="song"
                    className="p-2 border border-gray-300 rounded"
                    onFocus={() => setShowResults(true)}
                    onBlur={() => setTimeout(() => setShowResults(false), 200)}
                />
            </div>
            {showResults && songSearchResults.length > 0 && (
                <ul className="relative mt-2 w-full bg-white border border-gray-300 rounded shadow max-h-32 overflow-y-scroll z-10">
                    {songSearchResults.slice(0, 5).map((result: SearchResult) => (
                        <li
                            key={result.id}
                            className="p-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => {
                                setSong(result.title);
                                setShowResults(false);
                            }}
                        >
                            {result.title} - {result.artist.name}
                        </li>
                    ))}
                </ul>
            )}
            <div className="flex flex-col space-y-2">
                <label htmlFor="score" className="text-sm font-semibold">
                    得点:
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
            <div className="flex flex-col space-y-2">
                <label htmlFor="machine" className="text-sm font-semibold">
                    カラオケの機種:
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
            <button type="submit" className="p-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                送信
            </button>
        </form>
    );
};

export default ScoreForm;