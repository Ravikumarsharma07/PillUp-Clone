import { useState } from "react";
import "./../styles/chatbtn.css";
import CloseIcon from "@mui/icons-material/Close";
import BoltIcon from "@mui/icons-material/Bolt";

const pillUpLogo =
  "data:image/jpeg;base64,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";



  function Chatbtn() {
      
    const [isShowingChat, setShowChat] = useState(false);

  function WhatsappBtnForMobile(){
    return (
    <a href="https://api.whatsapp.com/send/?phone=%2B918920878094&text=Hi+I+am+interested+in+ordering+from+PillUp&type=phone_number&app_absent=0"
    target="_blank"
    rel="noreferrer">
    <button
    id="whatapp-logo"
    className={isShowingChat ? "whatsapp-btn-closed" : null}
  >
    <img
      src="https://cdn-icons-png.freepik.com/256/15707/15707917.png?semt=ais_hybrid"
      alt="whatsapp logo"
    />
    {!isShowingChat && "Chat with us"}
  </button>
    </a>
    )
  };

  function WhatsappBtnForBigScreen(){
    return (
    <button
    id="whatapp-logo"
    className={isShowingChat ? "whatsapp-btn-closed" : null}
    onClick={handleClick}
  >
    <img
      src="https://cdn-icons-png.freepik.com/256/15707/15707917.png?semt=ais_hybrid"
      alt="whatsapp logo"
    />
    {!isShowingChat && "Chat with us"}
  </button>
    )
  };

  
  const customStyle = {
    visibility: "hidden",
  };
  function handleClick() {
    setShowChat(!isShowingChat);
  }

  return (
    <div className="chat-container">
      <div
        id={isShowingChat ? "chat-ui" : "chat-ui-closed"}
        style={isShowingChat ? null : customStyle}
      >
        <div className="chat-heading">
          <img height="68px" src={pillUpLogo} alt="pillup logo" />
          <h3>PillUp</h3>
          <p>Always there for your medicine needs</p>
          <button onClick={handleClick}>
            <CloseIcon />
          </button>
        </div>

        <div className="chat-main">
          <div className="chat-main-div">
            <p>PillUp</p>
            <p>Hello! Greetings from PillUp. How can we help you today ?</p>
          </div>
        </div>
        <div className="chat-footer">
          <a
            href="https://api.whatsapp.com/send/?phone=%2B918920878094&text=Hi+I+am+interested+in+ordering+from+PillUp&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            Start chat
          </a>
          <p style={{ margin: "0px 0px 0px 20px" }}>
            <BoltIcon
              sx={{
                color: "rgb(255, 238, 0)",
                fontSize: "22px",
                left: "134px ",
                position: "absolute",
              }}
            />{" "}
            by <i style={{ fontWeight: "600", color: "#08cf65" }}> AiSensy</i>
          </p>
        </div>
      </div>

       {window.innerWidth <600 ? <WhatsappBtnForMobile />:<WhatsappBtnForBigScreen />}
    </div>
  );
}

export default Chatbtn;
