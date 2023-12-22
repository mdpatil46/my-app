import React, {useState} from "react";
import { useSelector } from "react-redux";





function TextForm(props) {
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

  const myDarkmode = useSelector((state)=>state.counter.darkMode);
  
  
  return (
    <>

      {/* <div className={`continer my-3 ${ myDarkmode ?'bg-dark':'bg-light'}`}> */}

      <div className={`my-3 ${myDarkmode ? "bg-dark":"bg-light"}`}>
        

    
        <h2 className={myDarkmode?'text-white':'text-black'}>Write Your Text Here</h2>
        <div className="container"></div>
        
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
          <h2 className={myDarkmode?'text-white':'text-black'}>Your Text Summary</h2>
          <p className={myDarkmode?'text-white':'text-black'}>
            {Text.split(" ").length} Word {Text.length} Caracters
          </p>
          <h4 className={myDarkmode?'text-white':'text-black'}>Preview</h4>
          <p className={myDarkmode?'text-white':'text-black'}>{Text}</p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default TextForm;
