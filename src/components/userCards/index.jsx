import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeName } from "../../store/modules/actions";
import { useSelector } from "react-redux";
import "./styles.css";
const User = () => {
  const selector = useSelector((store) => store.user);
  const [inp, setInp] = useState("");
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changeName(inp));
  };
  console.log(selector);
  return (
    <div className="container">
      <h2 className="title">{selector.name}</h2>
      <input className="inpt" onChange={(e) => setInp(e.target.value)} />
      <button className="btn" onClick={handleClick}>
        Change
      </button>
    </div>
  );
};
export default User;
