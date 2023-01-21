import "./index.css";

let Button = function (props) {
  return (
    <div className="button" onClick={props.onClick}>
      {props.name}
    </div>
  );
};

export default Button;
