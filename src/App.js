
import './App.css';
import React,{useState} from "react";
import Navbar from './components/Navbar';
import TextForm from './components/textForm';

import Alert from './components/Alert';




function App() {
  
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState('null');
  const alertmessage=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='rgb(38, 66, 110)';
      alertmessage('Dark button enabled',"primary");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      alertmessage('Light button enabled',"success");
    }
  }
  return (
    <>
      
        <Navbar title="SR Editing" aboutText="About us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
       
        
        <div className="container">
        <TextForm heading="Enter your text you want to update" mode={mode} />
        </div>
      
  
    </>
  );
}

export default App;
