import { useEffect, useState } from "react";
import HomeAppBar from "../utils/AppBar/HomeAppBar";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Card, CardContent, Typography } from "@mui/material";
import styled from "@emotion/styled";


interface MusicData {
    title: string;
    singer: string;
    level: string;
    id: number;
    created_at: string;
    updated_at: string;
}

const ResponsiveButtonStack = styled(Stack)({
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    "& > *": {
        flex: "1 0 17%",
        width: "100%",
        margin: "6px",
    },
});


const Home = () => {

    const [data, setData] = useState<MusicData[]>([]);
    const [targetLevel, setTargetLevel] = useState<string>("");

    const URL = "http://localhost:8000/musics";

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(URL);
            const jsonData = await response.json();
            setData(jsonData);
        };
        fetchData();
    }, []);

    const handleClick = () => {
        const filteredData = data.filter((item) => item.level === targetLevel);
        setData(filteredData);
    }

    return (
        <div>
            <HomeAppBar />
            <ResponsiveButtonStack>
                <Button onClick={() => setTargetLevel("1")} variant="contained" style={{ backgroundColor: "#FF2929", color: "#000000" }}>Level 1</Button>
                <Button onClick={() => setTargetLevel("2")} variant="contained" style={{ backgroundColor: "#FF5D22", color: "#000000" }}>Level 2</Button>
                <Button onClick={() => setTargetLevel("3")} variant="contained" style={{ backgroundColor: "#FFEB3B", color: "#000000" }}>Level 3</Button>
                <Button onClick={() => setTargetLevel("4")} variant="contained" style={{ backgroundColor: "#A4C549", color: "#000000" }}>Level 4</Button>
                <Button onClick={() => setTargetLevel("5")} variant="contained" style={{ backgroundColor: "#45FF3B", color: "#000000" }}>Level 5</Button>
                <Button onClick={() => setTargetLevel("6")} variant="contained" style={{ backgroundColor: "#00FF95", color: "#000000" }}>Level 6</Button>
                <Button onClick={() => setTargetLevel("7")} variant="contained" style={{ backgroundColor: "#47E0FF", color: "#000000" }}>Level 7</Button>
                <Button onClick={() => setTargetLevel("8")} variant="contained" style={{ backgroundColor: "#2E90FF", color: "#000000" }}>Level 8</Button>
                <Button onClick={() => setTargetLevel("9")} variant="contained" style={{ backgroundColor: "#9422FF", color: "#000000" }}>Level 9</Button>
                <Button onClick={() => setTargetLevel("10")} variant="contained" style={{ backgroundColor: "#DA44FF", color: "#000000" }}>Level 10</Button>
                <Button onClick={() => setTargetLevel("")} variant="contained" style={{ backgroundColor: "#FFFFFF", color: "#000000", border: "1px solid #000000" }}>Show all</Button>
            </ResponsiveButtonStack>

            <CardWrapper>
                {data
                    .filter((item) => item.level === targetLevel || targetLevel === "")
                    .map((item) => (
                        <Card key={item.id} sx={{ minWidth: 400, margin: "10px", backgroundColor: "#EAFED8" }}>
                            <CardContent>
                                <Typography variant="h5" component="div" sx={{ color: 'blue' }}>
                                    {item.title}
                                </Typography>
                                <Typography sx={{ mb: 0.5 }} color="green" >
                                    {item.singer}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'gray' }}>Level: {item.level}</Typography>
                            </CardContent>
                        </Card>
                    ))}
            </CardWrapper>
        </div>
    );
};

const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export default Home;