import { useEffect, useState } from "react";
import reactLogo from "@assets/react.svg";
import { Button } from "antd";
import "./index.module.scss";
import { useNavigate } from "react-router-dom";

function home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const navigate = useNavigate();
  const goAboutPage = () => {
    navigate("/login");
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Button type="primary" onClick={() => setCount((count) => count - 1)}>
        -1
      </Button>
      <Button type="primary" onClick={goAboutPage}>
        跳转login
      </Button>
    </div>
  );
}

export default home;
