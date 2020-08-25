import React, {useState}  from 'react';

const LabeledInput = ({label, setInputValues, index}) =>{
    const [inputValue, setInputValue] = useState('');

    return(<div className="labeled__input__container">
        <label className="labeled__input__label">{label}</label>
        <input className="labeled__input__input" value= {inputValue} onChange={e => {
            setInputValue(e.target.value);
            setInputValues(e.target.value, index);
        }}/>
    </div>
    )
}

export default LabeledInput;