import axios from "axios";

const Karaoke = () => {
    const url = "http://localhost:8000/";

    axios.get(url)
        .then((res) => {
            console.log(res.data);
            return res.data;
        });
};

export default Karaoke