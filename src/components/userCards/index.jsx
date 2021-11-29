import { useState } from "react";
import { useDispatch } from "react-redux";
import { ChangeName } from "../../store/modules/actions";
import "./styles.css";
const User = () => {
  const [inp, setInp] = useState();
  const [user, setUser] = useState([]);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(ChangeName(inp));
    setUser(inp);
  };
  return (
    <div className="container">
      <h2 className="title">Nome de usuário: {user}</h2>
      <input className="inpt" onChange={(e) => setInp(e.target.value)} />
      <button className="btn" onClick={handleClick}>
        Change
      </button>
    </div>
  );
};
export default User;
