import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity } from 'react-native';
import { fetchChatResponse } from '../utils/api';
import { globalStyles, colors } from '../styles/styles';

const ChatbotScreen = () => {
  // state to handle chat text
  const [chatText, setChatText] = useState('');
  // state to handle chat history
  const [chatHistory, setChatHistory] = useState([]);

  // function to handle chat submission
  const handleChat = async () => {
    const response = await fetchChatResponse(chatText);
    setChatHistory([...chatHistory, { query: chatText, reply: response }]);
    setChatText('');
  };

  // function to render each chat item
  const renderChatItem = ({ item }) => (
    <View>
      <Text style={globalStyles.resultItem}>You: {item.query}</Text>
      <Text style={globalStyles.resultItem}>Bot: {item.reply}</Text>
    </View>
  );

  return (
    <View style={globalStyles.container}>
      <TextInput
        placeholder="Ask me anything..."
        placeholderTextColor={colors.text}
        style={globalStyles.input}
        value={chatText}
        onChangeText={(text) => setChatText(text)}
      />
      <TouchableOpacity onPress={handleChat} style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>Send</Text>
      </TouchableOpacity>
      <FlatList
        data={chatHistory}
        renderItem={renderChatItem}
        keyExtractor={(item, index) => index.toString()}
        style={globalStyles.resultList}
      />
    </View>
  );
};

export default ChatbotScreen;
