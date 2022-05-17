import { useCallback, useEffect, useState } from "react"

interface InputFormProps {
    defaultValue?: string;
}

const storageFormKey = 'costam';

// class SimpleComponent extends ReactComponent {
//     constructor(){
//         super();
//     }
//     public render(){
//         return <div>bede</div>
//     }
// }

export const InputForm = (props?: InputFormProps) => {
    const [displayError,setDisplayError] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('Input')
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

    useEffect(() => {
        let valueToSet = '';
        const localStorageData = localStorage.getItem(storageFormKey)
        if (!!localStorageData){
            valueToSet = localStorageData;
            //setInputValue(localStorageData)
        } else {
            if (!!props?.defaultValue){
                valueToSet = props?.defaultValue;
            }
        }
        
    },  [])

    return <div style={{display: 'flex', flexDirection:'column',flexWrap:'wrap'}}>
        {displayError && <div style={{color:'red'}}>{errorMessage}</div>}
        <div>User name:</div>
        <input onInput={handleInputChange} value={inputValue} type="text" />
        <br/>
        <button onClick={handleSubmit} disabled={!formReadyToSubmit}>Submit data</button>
    </div>
}