import React, { useState } from 'react'

export default function MyTextForm(prop) {
    const handelReverse = () => {
        let newText = text.split("").reverse().join("").split(" ").reverse().join(" ")
        setText(newText);
        prop.showAlert('Text are Reserved','info');
    }
    const clearText = () => {
        setText("");
        prop.showAlert('Text are Removed','danger');
    }
    const handleLowerCase = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
        prop.showAlert('Text are Convert in Lowercase','success');
    }
    const handleTextInput = (event) => {
        console.log("Text are change");
        setText(event.target.value)
    }
    const handleUpperCase = () => {
        console.log('Button Are Clicked');
        let newText = text.toUpperCase();
        setText(newText);
        prop.showAlert('Text are Convert in Upppercase','secondary');
    }
    const [text, setText] = useState('Enter your Text Here');
    return (
        <div>
            <div className='m-3'>
                <label className={`text-${prop.mode === 'light'? 'dark': 'light'}`} htmlFor="my_text">Enter your Text here</label>
                <textarea className="form-control" id="my_text" value={text} rows="3" onChange={handleTextInput}></textarea>
                <button className={`btn btn-${prop.mode == 'light'? 'primary': 'secondary'} my-2 mx-2`} onClick={handleUpperCase}>Convert Uppercase</button>
                <button className={`btn btn-${prop.mode == 'light'? 'primary': 'secondary'} my-2 mx-2`} onClick={handleLowerCase}>Convert Lowercase</button>
                <button className={`btn btn-${prop.mode == 'light'? 'primary': 'secondary'} my-2 mx-2`} onClick={handelReverse}>Convert Reverse</button>
                <button className={`btn btn-${prop.mode == 'light'? 'primary': 'secondary'} my-2 mx-2`} onClick={clearText}>Clear Text</button>
            </div>
            <div className='text-summery'>
                <h1 className={`text-${prop.mode === 'light'? 'dark': 'light'}`}>Text Summery</h1>
                <p className={`text-${prop.mode === 'light'? 'dark': 'light'}`}>{text.split(" ").length} words and {text.length} Characters</p>
                <h2 className={`text-${prop.mode === 'light'? 'dark': 'light'}`}>Preview Text</h2>
                <p className={`text-${prop.mode === 'light'? 'dark': 'light'}`}>{text}</p>
            </div>
        </div>
    )
}
