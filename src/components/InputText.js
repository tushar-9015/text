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

const handleOnChange = (event) => {
    setText(event.target.value);
}

    const [text, setText] = useState("");
    return (
        <>
       <div>
        <div className="text-container">
            <label >{prop.heading}</label>
            <textarea className="text-input" value={text} onChange={handleOnChange} rows="12" placeholder="write here" />
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-pimary"  onClick={handleLoClick}>Convert To Lowercase</button>

        </div>
        <div className="passage-text-container">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").filter(value => value !== "").length} words and {text.length} characters long.</p>
            <p>{0.008 * text.split(" ").filter(value => value !== "").length} Minutes read.</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
</>
    )
}