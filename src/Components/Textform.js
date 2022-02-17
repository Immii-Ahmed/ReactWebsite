// improting react from react and importing useSate hook from react 
// state concept in this file learned
import React,{useState} from "react";
// import PropTypes from "prop-types"

// rfc => react function based component 
export default function Textform(props) {
    const HandleUpperClick = ()=> {
        // console.log("button is clicking"  + text);
        const NewText = text.toUpperCase();
        setText(NewText);
        props.ShowAlert("Changed to capital letters","success")
    }

    // lower case handler 
    const HandleLowerClick =()=>{
      const NewText = text.toLowerCase();
      setText(NewText);
      props.ShowAlert("Changed to small letters","success")
    }

    // Remove/Clear function 
    const HandleRemoveClick=()=>{
      const NewText = "";
      setText (NewText);
      props.ShowAlert("Text removed","success")
    }
    const handleOnChange = (event)=> {
        // console.log("OnChange is clicking");
        setText(event.target.value);
    }

    // text defines the default value of text and settext defines the new value of the text 
    // const [text, setText] = useState("hello");
    const [text, setText] = useState("");
    return (
      <>
          <div>
            <div className={`mb-3 text-${props.text}`}>
              <label forhtml="exampleFormControlTextarea1" className="form-label">
                <h2>Write Your Sentence or Try Practice</h2>
              </label>
              <textarea
                className={`form-control text-${props.text} bg-${props.mode2}`} onChange={handleOnChange}
                id="exampleFormControlTextarea1" value={text}
                rows="8"></textarea>
            </div>
            <button className={`btn btn-${[props.btn2]} mx-2`} onClick={HandleUpperClick}>Change to Uppercase</button>
            <button className={`btn btn-${[props.btn2]} mx-2`} onClick={HandleLowerClick}>Change to Lowercase</button>
            <button className={`btn btn-${[props.btn2]} mx-2`} onClick={HandleRemoveClick}>Remove Text</button>
          </div>
          <div className={`container my-3 text-${props.text}`}>
            <h1>Summary of text</h1>
            <p>{text.split(" ").length} words and {text.length} Letters</p>
            <h3>Minutes Required To Read</h3>
            <p>{0.008 * text.split("").length}</p>
            <h3>{props.mode}Preview</h3>
            <p>{text.length>0 ? text : "Enter something above to preview it"}</p>
          </div>
    </>
  );
}
