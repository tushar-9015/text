import "../App.css"

export default function InputText (prop) {
    return (
       <div>
        <div className="text-container">
            <label >{prop.heading}</label>
            <textarea className="text-input" rows="12" placeholder="write here" />
        </div>
        <button className="btn btn-primary">Convert To Uppercase</button>

        </div>

    )
}