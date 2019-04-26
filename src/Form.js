import React from 'react'
import style from './styles.module.css'

function Form(props) {
    return (
        <div>
            <form className={style.memeForm} onSubmit={props.handleSubmit}>
                <input 
                type="text"
                placeholder="Type your top text"
                name="topText"
                value={props.data.topText}
                onChange={props.handleChange}
                />
                <input 
                type="text"
                placeholder="Type your bottom text"
                name="bottomText"
                value={props.data.bottomText}
                onChange={props.handleChange}
                />
                <button>Generate</button>
            </form>
    
                <div className={style.meme}>        
                <img src={props.data.randomImg} alt="" />
                <h2 className={style.top}>{props.data.topText}</h2>
                <h2 className={style.bottom}>{props.data.bottomText}</h2>
                </div>
        </div>

    )
}

export default Form