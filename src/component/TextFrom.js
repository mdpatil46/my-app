import React, { useState } from "react";


function TextForm(prop) {
  function Myupclick() {
    // console.log("Uppercase was click" + Text)
    let newtext = Text.toUpperCase();
    setText(newtext);
  }

  function Myloclick(event) {
    // console.log("Uppercase was click" + Text)
    let newtext = Text.toLowerCase();
    setText(newtext);
  }
  function MyUcamelclick() {
    let newText = Text.split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");

    setText(newText);
  }

  function MyClearclick(event) {
    // console.log("Uppercase was click" + Text)
    let newtext = "";
    setText(newtext);
  }
  function MyclickOnchange(event) {
    console.log("clickOn change");
    setText(event.target.value);
  }

  function MyRemoveclick() {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  function MyCopyclick() {
    let textarea = document.getElementById("My Text Box");
    textarea.select();
    document.execCommand("copy");
  }
  const [Text, setText] = useState("");
  // setText("Hello");

  const [mode, setMode]= useState(false)

  function myMode (){
    setMode(!mode)
  }


  return (
    <>
      <div className={mode?`bg-dark`:`bg-light`}>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={myMode}/>
  <label className={`form-check-label ${mode ?`text-white`:`text-darl`}`} htmlForfor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
        <h2>Write Your Text Here</h2>
        <div className="container"></div>
        {/* <h1>{prop.heading} </h1> */}
        <div className="mb-3">
          <textarea
            className="form-control"
            value={Text}
            onChange={MyclickOnchange}
            id="My Text Box"
            rows="4"
          ></textarea>
          <br />
          <button className="btn btn-primary mx-2" onClick={Myupclick}>
            {" "}
            Convert Uppercase{" "}
          </button>
          <button className="btn btn-primary mx-2" onClick={Myloclick}>
            Convert Lowercase{" "}
          </button>
          <button className="btn btn-primary mx-2" onClick={MyUcamelclick}>
            {" "}
            Convert Upper Camel{" "}
          </button>
          <button className="btn btn-primary mx-2" onClick={MyRemoveclick}>
            Remove Extra Spaces{" "}
          </button>
          <button className="btn btn-primary mx-2" onClick={MyCopyclick}>
            Copy Text{" "}
          </button>
          <button
            className="btn btn-outline-danger mx-2"
            onClick={MyClearclick}
          >
            Clear
          </button>
        </div>
        <div className="container my-4">
          <h2>Your Text Summary</h2>
          <p>
            {Text.split(" ").length} Word {Text.length} Caracters
          </p>
          <h4>Preview</h4>
          <p>{Text}</p>
        </div>
      </div>
    </>
  );
}

export default TextForm;
