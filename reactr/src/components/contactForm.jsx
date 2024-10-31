import Button from "./Button/Button";
import { BsChatLeftTextFill } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";

const Form = () => {
  return (
    <>
      <div className="form_page">
        <h1>CONTACT FORM!!!</h1>
        <div className="top-btn">
          <Button
            text="VIA Suppoort Chat"
            icon={<BsChatLeftTextFill fronsize="24px" />}
          />
          <Button text="Via Call" icon={<BiSolidPhoneCall fronsize="24px" />} />

          <Button
            isOutline={true}
            text="VIA Email Form"
            icon={<IoMdMail fronsize="24px" />}
          />
        </div>
        <form>
          <div className="form-container">
            <label htmlFor="name">Name</label>
            <input type="text" name="name"></input>
          </div>
          <div className="form-container">
            <label htmlFor="email">E-Mail</label>
            <input type="email" name="email"></input>
          </div>
          <div className="form-container">
            <label htmlFor="text">Text</label>
            <textarea type="text" className="text-area" rows="8"></textarea>
          </div>
          <Button text="Summit" />
        </form>
      </div>
    </>
  );
};
export default Form;
