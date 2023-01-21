import "./index.css";
let Input = function (props) {
  return (
    <div className="inputBox">
      <div className="inputLabel">{props.label}</div>
      <input className="input" value={props.value} onChange={props.onChange} />
    </div>
  );
};

export default Input;
