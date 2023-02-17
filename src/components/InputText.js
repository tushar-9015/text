import "../App.css"
import React from "react"
import { useState } from "react"

export default function InputText (prop) {
const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
}

const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
}

const handleClear = () => {
    let newText = ("");
    setText(newText);
}

const handleOnChange = (event) => {
    setText(event.target.value);
}

const handleCopy = () => {
    navigator.clipboard.writeText(text);
}

const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
}

    const [text, setText] = useState("");
    return (
        <>
       
        <div className="text-container">
            <label >{prop.heading}</label>
            <textarea className="text-input" value={text} onChange={handleOnChange} rows="12" placeholder="write here" />
        </div>
        <button className="btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn-primary"  onClick={handleLoClick}>Convert To Lowercase</button>
        <button className="btn-primary" onClick={handleClear}>Clear Text</button>
        <button className="btn-primary" onClick={handleCopy}>Copy Text</button>
        <button className="btn-primary" onClick={handleExtraSpaces}>Remove Extra Spaces </button>

        <div className="passage-text-container">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").filter(value => value !== "").length} words and {text.length} characters long.</p>
            <p>{0.008 * text.split(" ").filter(value => value !== "").length} Minutes read.</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
</>
    )
}