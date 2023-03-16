import ScoreForm from "../components/diary/ScoreForm";
import ScoreList from "../components/diary/ScoreList";
import HomeAppBar from "../utils/AppBar/HomeAppBar"
import { useEffect, useState } from 'react';
import { Score, fetchScores } from "../utils/apiClient";
import "../styles/diary.css";

const Diary = () => {
    const [scores, setScores] = useState<Score[]>([]);

    useEffect(() => {
        async function loadScores() {
            try {
                const fetchedScores = await fetchScores();
                setScores(fetchedScores);
            } catch (error) {
                console.error(error);
            }
        }

        loadScores();
    }, []);

    return (
        <>
            <HomeAppBar />
            <div className="App mx-auto mt-10 p-8 bg-white shadow-md max-w-md">
                <h1 className="text-2xl font-semibold mb-6">カラオケの得点</h1>
                <ScoreForm />
                <ScoreList scores={scores} />
            </div>
        </>
    );
}

export default Diary