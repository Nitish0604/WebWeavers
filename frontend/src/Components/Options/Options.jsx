import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
const Options = (props) => {
    const options = [
        {text:"Python",handler:()=>{'Python'},id:1},
        {text:"java",handler:()=>{},id:2},
    ];
    const buttonMarkup=options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">
            {option.text}
        </button>
    ));
    return(
        <div className="options-container">{buttonMarkup}</div>
    )
}
export default Options;