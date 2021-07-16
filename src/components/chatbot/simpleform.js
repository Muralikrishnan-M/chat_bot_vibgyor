import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';

// all available config props
const config ={
  width: "400px",
  height: "500px",
  floating: true,
};

class SimpleForm extends Component {
  render() {
    return (
      <ChatBot
  headerTitle="Speech Synthesis"
  speechSynthesis={{ enable: true, lang: 'en' }}
  steps={[
    {
      id:'intro', 
      message:'Welcome to Vibgyor Innovation, If you have any doubt chat with us.', 
      trigger:'intro-user',
    },
    {
      id:'intro-user', 
      options:[
      {value:'y', label:'Yes', trigger:'yes-response'},
      {value:'n', label:'No', trigger:'no-response'},
      ] 
    },
    {
      id:'yes-response', 
      message:'Great!', 
      end:true,
    },
    {
      id:'no-response', 
      message:'Sorry to hear that.', 
      end:true,
    },
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      end: true,
    },
  ]}
  {...config}
/>
        
        );
      }

    }

    export default SimpleForm;
