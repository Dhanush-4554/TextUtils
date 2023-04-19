import React from 'react';


export default function About() {
    const myAlign = {
        textAlign: 'center',
        // backgroundColor: '#c4acff80',
        padding: '20px 10px',
        marginTop: '100px',
        borderTop: '1px solid grey'
    }
    return (
        <>
        <div  className='myDiv' >
            <div className="container" style={myAlign} >
                <h2>About</h2>
                <p>TextUtils is a utility used to convert text to uppercase or lowercase, copy text, listen to text, count number of words in text and estimate the required time required to read the text. It's built using HTML, CSS, JavaScript ans React.js</p>
                <strong>Built with ❤️ by Dhanush</strong>
            </div>
        </div>
            
        </>
    )


}