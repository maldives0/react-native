import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import {Dialogflow_V2} from 'react-native-dialogflow';

import {dialogflowConfig} from '../env';
const BOT_USER = {
  _id: 2,
  name: 'FAQ Bot',
  avatar: 'https://i.imgur.com/7k12EPD.png',
};
let welcomeMessage = {
  _id: 1,
  text: `안녕하세요? 저는 잘키움 상담봇 🤖 입니다.\n\n오늘은 어떤 일을 도와드릴까요?`,
  createdAt: new Date(),
  user: BOT_USER,
};
const TabHomeScreen = ({navigation, route}) => {
  const [messages, setMessages] = useState([welcomeMessage]);
  console.log(messages);
  useEffect(() => {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_KOREAN,
      dialogflowConfig.project_id,
    );
  }, []);

  const handleGoogleResponse = (result) => {
    let text =
      result.queryResult.fulfillmentText ||
      '제가 이해를 잘 못한 것 같아요. 다시 한번 말씀해주시겠어요?';
    // console.log('result:', result.queryResult.fulfillmentText);
    sendBotResponse(text);
  };

  const sendBotResponse = (text) => {
    let msg = {
      _id: messages.length + 2,
      text,
      createdAt: new Date(),
      user: BOT_USER,
    };

    setMessages((previousMessages) => GiftedChat.append(previousMessages, msg));
  };

  const onSend = useCallback(
    (newMessage = []) => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, newMessage),
      );

      console.log('send:', newMessage[0].text);
      Dialogflow_V2.requestQuery(
        newMessage[0].text,
        (result) => handleGoogleResponse(result),
        (error) => console.dir(error),
      );
    },
    [messages],
  );

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default TabHomeScreen;
