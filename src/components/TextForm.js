// import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react'
import { useState } from 'react'



export default function TextForm(props) {
    const uppercaseclick =()=>{
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase!", "success");
    }
    const lowercaseclick =()=>{
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase!", "success");
    }
    const copyclick =()=>{
       
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success");
    }
    const removeextraspaceclick =()=>{
        setText(text.split(/[ ]+/).join(" "));
        props.showAlert("Extra spaces removed", "success");
        
    }
    const handleOnChange =(event)=>{
    setText(event.target.value);
    }
    const cleanText = ()=>{
        setText("");
        props.showAlert("Text Cleared!", "success");
    }
//     const genText = ()=>{
//         let newText = lorem(Number(currentRadioValue));
//         setText(newText);
//     }
   
//     const [currentRadioValue, setCurrentValue] = useState("10");

//       const handleRadioChange = (e) => {
//         setCurrentValue(e.target.value);
//       };


    const[text,setText]=useState("");
    
    return (
        <>
        <div className='container' style={{color : props.mode === 'light'? 'black':'white'}}>
            <h1>{props.heading}</h1>
            <textarea className="form-control my-3" onChange={handleOnChange} id="mybox" value={text}   rows="8" style={{backgroundColor : props.mode === 'light'? 'white':'grey' , color: props.mode === 'light'? 'black':'white'}}></textarea>
            <button type="button" onClick={uppercaseclick} className="btn btn-primary mx-1 my-1">Convert to UpperCase</button>
            <button type="button" onClick={lowercaseclick} className="btn btn-primary mx-1 my-1">Convert to LowerCase</button>
            
            {/* text generator  */}
             {/* <div className="form-check form-check-inline">
   <label className="form-check-label" htmlFor="inlineRadio1" >10</label>
 </div>
             <div className="form-check form-check-inline">
   <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="25" onChange={handleRadioChange} checked={currentRadioValue === '25'}/>
   <label className="form-check-label" htmlFor="inlineRadio2">25</label>
 </div>
             <div className="form-check form-check-inline">
   <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="50" onChange={handleRadioChange} checked={currentRadioValue === '50'}/>
   <label className="form-check-label" htmlFor="inlineRadio3" >50</label>
 </div>
   <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="10" onChange={handleRadioChange}  defaultChecked/> */}

 {/* <button type="button" onClick={genText} className="btn btn-secondary mx-1">Generate {currentRadioValue} words</button> */}
             <button type="button" onClick={copyclick} className="btn btn-primary mx-1 my-1">Copy</button>
             <button type="button" onClick={removeextraspaceclick} className="btn btn-primary mx-1 my-1">Remove Extra Spaces</button>
            <button type="button" onClick={cleanText} className="btn btn-warning mx-1 my-1">Clear</button>
        </div>
        <div className="container my-3 " style={{color : props.mode === 'light'? 'black':'white'}} >
            <h2>Your Text Summary </h2>
            <p>{text.split(' ').filter(String).length} Words {text.length} Characters</p>
            <p>{0.008*text.split(' ').filter(String).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter some text above to preview here ..."}</p>
        </div>
        </>
    )
}
