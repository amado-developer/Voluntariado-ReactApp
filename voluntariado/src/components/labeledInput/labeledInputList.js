import React, {useState, useCallback} from 'react';
import LabeledInput from './labeledInputRow';
import '../../styles/labeledInput.css';
const labeledInputs = [
    'Nombre de la empresa', 
    'Teléfono', 
    'Email',
    'Dirección',
    'Nombre del proyecto',
];

const LabeledInputList = ({values}) =>{
    const [inputValues, setInputValues] = useState(['','','','','']);

    const valueChange = useCallback(
        (value, id) => {
            setInputValues( c =>
                c.map((item, index) => {
                    return id === index ? value : item;
                })
            )
        },
        [setInputValues]
    );

    values(inputValues)
    return(
        labeledInputs.map((lbl, index) => {
           return( 
           <LabeledInput 
            label={lbl}
            setInputValues = {valueChange}
            key = {index}
            index = {index}
            className="labeled__input__container"
           />
       
           )
        })
    )
}

export default LabeledInputList;