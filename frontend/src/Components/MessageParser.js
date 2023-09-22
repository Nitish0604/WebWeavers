// in MessageParser.js
import React  from 'react';
const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const lowercase = message.toLowerCase();
    if (lowercase.includes('hi')) {
      actions.afterHiMessage();
    }
    // if(lowercase.includes('Python')){
    //     actions.handlePython();
    // }
    if(children.props.state.checker == 'hi')
      actions.afterNameMessage();
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
     
      
    </div>
  );
};
export default MessageParser;
