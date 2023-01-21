import Input from "../form-Input";
import Button from "../button";
import "./index.css";

let Modal = function (props) {
  return (
    <div className="modal">
      <div className="modalMovieName">
        {props.showName ? props.showName : "Show Name"}
      </div>
      <div className="modalDetail">
        <div id="box" className="schedule">
          {props.time ? props.time : "Time"} {props.day ? props.day : "Day"}
        </div>
        <div id="box">
          country : {props.country ? props.country : "Country"}
        </div>
        <Input
          label={"Name"}
          value={props.name}
          onChange={props.nameOnChange}
        />
        <Input
          label={"Email"}
          value={props.email}
          onChange={props.emailOnChange}
        />
      </div>
      <Button onClick={props.submit} name={"Submit"} />
    </div>
  );
};

export default Modal;
