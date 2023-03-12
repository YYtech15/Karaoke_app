import {
    Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Link, Paper, Stack, TextField, Typography
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { teal } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();

    const pushCreate = () => {
        navigate("/login");
    }

    return (
        <Grid container justifyContent="center" alignItems="center">
            <Paper sx={{ px: 4, pt: 25, pb: 50, maxWidth: 700, width: "100%" }}>
                <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ mb: 4 }}>
                    <Avatar sx={{ bgcolor: teal[400] }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant={"h5"} sx={{ m: "20px" }}>
                        新規登録
                    </Typography>
                </Grid>
                <TextField label="Username" variant="standard" fullWidth required sx={{ mb: 2 }} inputProps={{ style: { fontSize: 25 } }} />
                <TextField type="password" label="Password" variant="standard" fullWidth required sx={{ mb: 4 }} inputProps={{ style: { fontSize: 25 } }} />
                <Button type="submit" color="secondary" variant="contained" fullWidth onClick={pushCreate}>
                    新規登録
                </Button>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 2, fontSize: "large" }}>
                    <Link href="/login">ログインに戻る</Link>
                </Box>
            </Paper>
        </Grid>
    );
}

export default SignIn
