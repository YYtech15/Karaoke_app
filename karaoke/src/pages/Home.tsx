import { useEffect, useState } from "react";
import HomeAppBar from "../utils/AppBar/HomeAppBar"

interface MusicData {
    title: string;
    singer: string;
    level: string;
    id: number;
    created_at: string;
    updated_at: string;
}

const Home = () => {
    const [data, setData] = useState<MusicData[]>([]);

    const URL = "http://localhost:8000/musics";

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(URL);
            const jsonData = await response.json();
            setData(jsonData);
        };
        fetchData();
    }, []);

    return (
        <div>
            <HomeAppBar />
            {data.map((item) => (
                <div key={item.id}>
                    <p>{item.title}</p>
                    <p>{item.singer}</p>
                    <p>{item.level}</p>
                </div>
            ))}
        </div>
    );
}

export default Home