import "./App.css";
// import FormikContainer from './components/FormikContainer';
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { useState } from "react";
import Register from "./components/Register";
import Forget from "./components/Forget";
function App() {
  const [active, setActive] = useState(1);
  return (
    <div className="auth-parent">
      <div className="auth">
        {/* <FormikContainer/> */}
        <div
          onClick={() => setActive(1)}
          className={active === 1 ? "option-active" : "option"}
        >
          Register
        </div>
        <div
          onClick={() => setActive(2)}
          className={active === 2 ? "option-active" : "option"}
        >
          Forget Password
        </div>
      </div>
     {
       active === 1 ? <Register/> : <Forget/>
     }
    </div>
  );
}

export default App;
