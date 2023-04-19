import React, { useState } from 'react'


export default function TextForm(props) {
    //count words
    
    const countWords = (content)=> {
       
        if(content === ""){
            return 0;
        }
        let words = content.split(" ");
        let len = words.length;
        let count = 0;

        for(let i =0; i<len; i++){
            if(words[i]===""||words[i]===' '){
                count++;
            }
        }
         return len-count;
        
    }
    //function to convert to upper case
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    //function to convert to lower case
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    //function to speak the text
    const handleSpeak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;

        window.speechSynthesis.speak(msg);
    }
    //function to copy text
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('');


    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [textareaStyle, settextareaStyle] = useState({
        color: 'black',
        backgroundColor: 'rgb(247, 247, 247)'
    })
    const styler = ({
        display: 'block',
        width: '210px',
        margin: '5px auto',
        padding: '0'
    })
    const [btnText, setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = () => {
        if (myStyle.backgroundColor === 'white') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'rgb(49 49 49)',
            })
            settextareaStyle({
                color: 'white',
                backgroundColor: 'rgb(69 73 52)',
                borderRadius: '0'
            })
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
            setBtnText("Disable Dark Mode");
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
            })
            settextareaStyle({
                color: 'black',
                backgroundColor: 'white',
                borderRadius: '0'
            })
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            setBtnText("Enable Dark Mode");
        }
    }
    return (
        <>
            <div className="container my-3" style={styler}>
                <button type="button" className="btn btn-dark">
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleStyle} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" onClick={toggleStyle}>{btnText}</label>
                    </div>
                </button>
            </div>
            <div className='container' style={myStyle}>
                <h1 className='my-3'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={textareaStyle} onChange={handleOnChange} value={text} id="myBox" rows="8" placeholder='Enter text here'></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleSpeak}>Speak Text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p className='my-0'>{countWords(text)} words and {text.length} characters</p>
                <p>{0.008 * countWords(text)} Minutes Read.</p>
                <h2>Preview</h2>
                <p>{text.length > 0?text: "Nothing to preview !"}</p>
            </div>
        </>

    )
}
