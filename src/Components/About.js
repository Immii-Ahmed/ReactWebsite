import React, {useState} from 'react';

export default function About() {

    // changing state of content and styling the components
    const [styleMy, myStyleChange] = useState( {
        color: 'black',
        backgroundColor : "white"
    })

    // second useState for buttons to change their state according to conditions
    const [btnStyle, btnChangeStyle] = useState("Enable Dark Mode")


    // Creating DarkMode function for their functionalities on onClick event 
    const DarkMode=()=>{
       if (styleMy.color === 'black'){
        // changing state with myStyleChange variable 
      myStyleChange({
          color:'White',
          backgroundColor:'black'
      })

    //   for changing inner content of button 
      btnChangeStyle("Enable Light Mode");
    }
        else{
            myStyleChange({
                color:'black',
                backgroundColor:'white'
            })
            btnChangeStyle("Enable Dark Mode");
    }
}
    return (
        <div className="container" style={styleMy}>
            <h3>About Us</h3>
                        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" style={styleMy} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    About Our Terms
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={styleMy}>
                    <strong>This section defines our terms and conditions.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables<code> ReactJs Toturials Self Learning</code>.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={styleMy} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                About Our Services
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={styleMy}>
                    <strong>This section explaining our services.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables<code> ReactJs Toturials Self Learning</code>.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={styleMy} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                About Our Company
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={styleMy}>
                    <strong>It Defines our company.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element<code> ReactJs Toturials</code>.
                </div>
                </div>
            </div>
            </div>
            <button className="btn btn-primary mx-2 my-4" onClick={DarkMode}>{btnStyle}</button>
        </div>
    )
}
