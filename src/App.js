import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import Textform from './Components/Textform';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


function App() {

  // setting light and dark mode to the navbar 
  const  [mode, setmode] = useState('dark');
  const  [mode2, setmode2] = useState('white');
  const  [textChange, setTextChange] = useState('Enable Dark Mode');

  // changing buttons color 
  const  [btn2, setBtn2] = useState('dark');

  // changing text color 
  const  [text, settext] = useState('dark');

  // creating state for changing alert 
  const [AlertMessage, setAlertMessage] = useState(null);

  // creating object for alert through method 
  const ShowAlert = (message, Type)=>{
    setAlertMessage({
      msg: message,
      Type: Type
    })
    setTimeout(() => {
      setAlertMessage(null)
    }, 3000);

  }

  const toggleMode =()=>{
          if(mode==="light"){
            setmode("dark")
            document.body.style.backgroundColor = "white";
            document.title = "light mode Enable";
            setTextChange("Enable Dark Mode")
            ShowAlert("Enabled light mode","success")
          }
          else{
            setmode("light")
            document.body.style.backgroundColor ="black";
            document.title = "Dark mode Enable";
            setTextChange("Enable Light Mode")
            ShowAlert("Enabled dark mode","success")

            // used for blinking any message on the title, page etc 
            // setInterval(() => {
            //   document.title ="install this app";
            // }, 2000);
            // setInterval(() => {
            //   document.title ="install now";
            // }, 1500);
          }
          if(mode2==="white"){
            setmode2("black")
          }
          else{
            setmode2("white")
          }
          if(btn2==="dark"){
            setBtn2("light")
          }
          else{
            setBtn2("dark")
          }
          if(text==="dark"){
            settext("white")
          }
          else{
            settext("dark")
          }
  }

  return (

  <>
  <Router>
    <Navbar title="ImranWeb" Home="Home" contact="Contact Us" mode={mode} toggleMode={toggleMode} number={67} textChange={textChange}/>
    {/* <div className="container my-4">
        <About />
    </div> */}

    <Alert AlertMessage={AlertMessage}/>
    <Textform  btn2={btn2} text={text} mode2={mode2} ShowAlert={ShowAlert}/>
    <div className="container my-4">
    <Switch>
          <Route exact path="/About">
            <About />
          </Route>
          // <Route exact path="/">
      <Textform  btn2={btn2} text={text} mode2={mode2} ShowAlert={ShowAlert}/>
          </Route>
        </Switch>
    </div>
    </Router>
  </>
    
  );
}

export default App;
