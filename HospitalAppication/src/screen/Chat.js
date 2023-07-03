// import * as React from 'react'
// import {
//     View,
//     StyleSheet,
//     Dimensions,
//     Image,
//     Text
// } from 'react-native'

// import { COLORS, MARGIN , FONTS ,ICONSSIZE,PADDING,RADIUS} from '../Constants/Constant'
// const { width, height } = Dimensions.get('window')

// export default class Chat extends React.Component {


//     constructor(props) {
//         super(props)
//         this.state = {


//         }
//     }
    
//     render() {
//         return (
//             <>
         
//          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Chat!</Text>
//     </View>
//             </>
//         )
//     }

// }


// const styles = StyleSheet.create({

// })


import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [a,seta]=useState("")

  useEffect(() => {
    // Connect to backend server and retrieve initial message history
    let A="AAAAAAAaa"
    seta(A)
  }, []);
  const handleSendMessage = () => {
    // Send new message to backend server and update local state
    // "AAAAAAAAAAAAAAAAAAAAAA"
    let m=messages
    m.push(message)
    setMessage("")
  };

  return (
    <View style={styles.container}>
    
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.button} onPress={handleSendMessage}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.messagesContainer}>
        {messages.map((message, index) => (
          <Text key={index} style={styles.message}>{message}</Text>
        ))}
      </View>
      <Text>{a}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#0f0f"
  },
  messagesContainer: {
    flex: 0.2,
    // justifyContent: 'flex-end',
    paddingBottom: 20,
    backgroundColor:"#00f"
  },
  message: {
    fontSize: 18,
    marginBottom: 10,
    color:"#f00f"
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    marginRight: 10,
    backgroundColor:"#0ff"
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor:"#ccc"
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    // backgroundColor:"#fff"
  },
});

export default Chat;


