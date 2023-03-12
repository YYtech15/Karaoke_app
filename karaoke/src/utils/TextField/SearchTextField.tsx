import { TextField, colors } from "@mui/material/";

const SearchTextField = () => {
    return (
        <>
            <h2>Search</h2>
            <TextField
                id="field"
                sx={{ color: colors.blue }}
                variant="outlined"
                label="検索キーワード"
                onChange={() => { }}
                onClick={() => { }}
            />
        </>
    );
};

export default SearchTextField;
