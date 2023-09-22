// in ActionProvider.jsx
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleState = (botMessage,checker = "") => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      checker
    }));
  }
  // const afterNameMessage = () => {
  //   const botMessage = createChatBotMessage(`What are you facing issue with`);
  //   handleState(botMessage);
  // }
  const afterHiMessage = () => {
    const botMessage = createChatBotMessage(`What are you facing issue with? `,{
      widget: "FirstOptionSet"
    });
    handleState(botMessage); 
  }

  const initialAction = () => {
    const botMessage = createChatBotMessage(`Type hi to begin`);
    handleState(botMessage,"hi");
  }

  const handlePickup = () => {
    const botMessage = createChatBotMessage(`What issue are you facing? `,{
      widget: "PickupOptionSet"
    });
    handleState(botMessage); 
  }

  const handleRewards = () => {
    const botMessage = createChatBotMessage(`What issue are you facing? `,{
      widget: "RewardOptionSet"
    });
    handleState(botMessage); 
  }

  const handleFinal = () => {
    const botMessage = createChatBotMessage(`You will soon get a call from our customer care.ThankYou!`);
    handleState(botMessage); 
  }
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            // handleHello,
            initialAction,
            // afterNameMessage,
            afterHiMessage,
            handlePickup,
            handleRewards,
            handleFinal,
          },
        });
      })}
    </div>
  );
};
export default ActionProvider;