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
        <Grid>
            <Paper
                elevation={3}
                sx={{
                    p: 4,
                    height: "100vh",
                    width: "80%",
                    m: "20px auto"
                }}
            >
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <Avatar sx={{ bgcolor: teal[400] }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant={"h5"} sx={{ m: "30px" }}>
                        ログイン
                    </Typography>
                </Grid>
                <TextField label="Username" variant="standard" fullWidth required />
                <TextField
                    type="password"
                    label="Password"
                    variant="standard"
                    fullWidth
                    required
                />
                <Box mt={8} px={5}>
                    <Button type="submit" color="primary" variant="contained" fullWidth onClick={pushLogin}>
                        ログイン
                    </Button>
                    <Typography variant="caption" fontSize={18}>
                        <Link href="#">パスワードを忘れましたか？</Link>
                    </Typography>
                    <Typography variant="caption" display="block" fontSize={18}>
                        アカウントを持っていますか？
                        <Link href="#">アカウントを作成</Link>
                    </Typography>
                </Box>
            </Paper>
        </Grid>
    );
};

export default Login