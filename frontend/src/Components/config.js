import { createChatBotMessage } from 'react-chatbot-kit';
import React from 'react';
import StartBtn from './Options/StartBtn';
import Options from './Options/Options';
import FirstOptionSet from './Options/FirstOptionSet';
import PickupOptionSet from './Options/PickupOptionSet';
import RewardOptionSet from './Options/RewardOptionSet';
import Avatar from './Avatar';
import AvatarUser from './AvatarUser';
const config = {
  initialMessages: [createChatBotMessage(`Welcome to E-swachh help.
  Type hi to continue`,
  )],
  botName: "E-Swachh Help",
  customComponents: {
    botAvatar: (props) => <Avatar {...props} />,
    userAvatar: (props) => <AvatarUser {...props} />
  },
  widgets: [
    // {
    //   widgetName: 'startBtn',
    //   widgetFunc: (props) => <StartBtn {...props}></StartBtn>,
    // },
    {
      widgetName: 'FirstOptionSet',
      widgetFunc: (props) => <FirstOptionSet {...props}></FirstOptionSet>,
    },
    {
      widgetName: 'PickupOptionSet',
      widgetFunc: (props) => <PickupOptionSet {...props}></PickupOptionSet>,
    },
    {
      widgetName: 'RewardOptionSet',
      widgetFunc: (props) => <RewardOptionSet {...props}></RewardOptionSet>,
    },
  ],
};
export default config;