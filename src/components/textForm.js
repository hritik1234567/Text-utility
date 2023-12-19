import React,{useState} from "react";

export default function TextForm(props) {
  const [text, setText] = useState('This is text you entered');
  const [color, setcolor] = useState("")

  const handleupclick = () => {
    console.log('UPPERCASE BUTTON IS CLICKED'+text);
    let newtext=text.toUpperCase();
    setText(newtext);
  };

  const handlelowclick = () => {
    console.log('UPPERCASE BUTTON IS CLICKED'+text);
    let newtext=text.toLowerCase();
    setText(newtext);
  };

  const handlecolorclick = () => {
    let x=document.getElementById('myBox');
    const randomNumber1 = Math.floor(Math.random() * 256);
    const randomNumber2 = Math.floor(Math.random() * 256);
    const randomNumber3 = Math.floor(Math.random() * 256);

    let newcolor=`rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
    x.style.color=newcolor;
    console.log(color);
   
  };
  const handlespacesclick = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(' '));
  };
  


  const handleonchange = (event) => {
    console.log('CONTENT CHANGED');
    setcolor(event.target.value);
    setText(event.target.value);
  };

  return (
    <>
    <div style={{color:props.mode==='light'?'black':'white'}}>
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          rows="8"
          value={text}
          onChange={handleonchange}
          id="myBox"
          style={{backgroundColor:props.mode==='light'?'white':'rgb(38, 66, 110)',color:props.mode==='light'?'black':'white'}}
        ></textarea>
      </div>
      <button className='btn btn-primary' onClick={handleupclick}>
        Convert to uppercase
      </button>
      <button className='btn btn-primary mx-2' onClick={handlelowclick}>
        Convert to lowercase
      </button>
      <button className='btn btn-primary mx-2' onClick={handlecolorclick}>
       Color change
      </button>
      <button className='btn btn-primary mx-2' onClick={handlespacesclick}>
       Remove extra spaces
      </button>
    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h4>YOUR TEXT NO OF WORDS AND CHARACTERS CALCULATION</h4>
        
        <p className="my-2">{text.split(" ").length} words and {text.length} characters</p>
        
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  );
}

