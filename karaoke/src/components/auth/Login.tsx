import {
    Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Link, Paper, Stack, TextField, Typography
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { teal } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

import "../../styles/Login.css"

const Login = () => {
    const navigate = useNavigate();

    const pushLogin = () => {
        navigate("/");
    }

    return (
        <Grid container justifyContent="center" alignItems="center">
            <Paper sx={{ px: 4, pt:25, pb: 50, maxWidth: 700, width: "100%" }}>
                <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ mb: 4 }}>
                    <Avatar sx={{ bgcolor: teal[400] }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant={"h5"} sx={{ m: "20px" }}>
                        ログイン
                    </Typography>
                </Grid>
                <TextField label="Username" variant="standard" fullWidth required sx={{ mb: 2 }} inputProps={{ style: { fontSize: 25 } }} />
                <TextField type="password" label="Password" variant="standard" fullWidth required sx={{ mb: 4 }} inputProps={{ style: { fontSize: 25 } }} />
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 ,fontSize:"medium"}}>
                    <Link href="#">パスワードを忘れましたか？</Link>
                    <Link href="/signin">アカウントを作成</Link>
                </Box>
                <Button type="submit" color="primary" variant="contained" fullWidth onClick={pushLogin}>
                    ログイン
                </Button>
            </Paper>
        </Grid>
    );
};

export default Login