import React, { useEffect, useState } from 'react';
import { Score, fetchScores } from '../utils/apiClient';
import HomeAppBar from '../utils/AppBar/HomeAppBar';
import ScoreForm from '../components/score_list/ScoreForm';
import ScoreList from '../components/score_list/ScoreList';

const Timeline = () => {
    const [scores, setScores] = useState<Score[]>([]);
    const [showScoreForm, setShowScoreForm] = useState(false);

    // useEffect(() => {
    //     async function loadScores() {
    //         try {
    //             const fetchedScores = await fetchScores();
    //             setScores(fetchedScores);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    //     console.log(scores)
    //     loadScores();
    // }, []);

    const handleScoreCreated = (newScore: Score) => {
        setScores((prevScores) => [...prevScores, newScore]);
    };

    const handleScoreDeleted = (scoreId: number) => {
        setScores((prevScores) => prevScores.filter((score) => score.id !== scoreId));
    };

    const handleOpenScoreForm = () => {
        setShowScoreForm(true);
    };

    const handleCloseScoreForm = () => {
        setShowScoreForm(false);
    };

    return (
        <>
            <HomeAppBar />
            <div className="App mx-auto mt-2 p-8 bg-white shadow-md max-w-md">
                <h1 className="text-2xl font-semibold mb-2">歴代のカラオケの得点</h1>
                <ScoreList scores={scores} onScoreDeleted={handleScoreDeleted} />
                {showScoreForm && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                        onClick={handleCloseScoreForm}
                    >
                        <div
                            className="bg-white p-8 rounded shadow-md max-w-md mx-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-0 right-0 m-2 p-2 text-black"
                                onClick={handleCloseScoreForm}
                            >
                                &times;
                            </button>
                            <ScoreForm onScoreCreated={handleScoreCreated} onClose={handleCloseScoreForm} />
                        </div>
                    </div>
                )}
                <button
                    className="fixed bottom-5 right-5 bg-blue-500 text-white p-4 rounded-full shadow-md"
                    onClick={handleOpenScoreForm}
                >
                    +
                </button>
            </div>
        </>
    );
};

export default Timeline;