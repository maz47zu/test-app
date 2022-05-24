import { useCallback, useEffect, useState } from "react"

interface InputFormProps {
    defaultValue?: string;
}

const storageFormKey = 'inputInStorage';

export const InputForm = (props?: InputFormProps) => {
    const [displayError,setDisplayError] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>()

    const formReadyToSubmit = !(displayError && !inputValue);

    const handleInputChange = (event: any) => {
        const messageLength = event.target.value.length;
        console.log(event.target.value);
        setInputValue(event.target.value);
        if (messageLength < 3 || messageLength > 20){
            if (messageLength < 3){
                setErrorMessage('User name too short')
            }
            if (messageLength > 20){
                setErrorMessage('User name too long')
            } 
            setDisplayError(true)
        }else{
            setDisplayError(false)
            setErrorMessage('')
        }
    }

    const handleSubmit = useCallback(() =>{
        if (formReadyToSubmit) {
            localStorage.setItem(storageFormKey, inputValue)
        }
    }, [inputValue])

    //if localStorage is empty then data is taken from props (DefaultLogin)
    //if localStorage isn't empty then last submitted login is loaded from localStorage
    useEffect(() => {
        let valueToSet = '';
        const localStorageData = localStorage.getItem(storageFormKey)
        if (!!localStorageData){
            console.log(localStorageData)
            valueToSet = localStorageData;
            setInputValue(valueToSet);
            //setInputValue(localStorageData)
        } else {
            if (!!props?.defaultValue){
                valueToSet = props?.defaultValue;
                setInputValue(valueToSet);
            }
        }
    },  [props])

    return <div style={{display: 'flex', flexDirection:'column',flexWrap:'wrap'}}>
        {displayError && <div style={{color:'#3decf2', }}>{errorMessage}</div>}
        <div>User name:</div>
        <input className='input-field' onInput={handleInputChange} value={inputValue} type="text"/>
        <br/>
        <button className='button-click' onClick={handleSubmit} disabled={!formReadyToSubmit || displayError}>Submit data</button>
    </div>
}