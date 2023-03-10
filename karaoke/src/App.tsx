import axios from "axios";
import { useState } from "react";
import './App.css'

type Data = {
  message: string;
}

const App = () => {
  const [data, setData] = useState<Data>();
  const url = "http://localhost:8000";

  const GetData = () => {
    axios.get(url)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
  };
  return (
    <div>
      <div>ここに処理を書いていきます</div>
      {data ? <div>{data.message}</div> : <button onClick={GetData}>データを取得</button>}
    </div>
  );
}

export default App