import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
       // console.log(target.value)
    }
    const onSubmit =(event)=>{
       event.preventDefault();
       
       if(inputValue.trim().length <=1)return;

       //setCategories(categories=>[inputValue,...categories]);
       onNewCategory(inputValue.trim().toLowerCase());
       setInputValue('');
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder="Buscar Gif"
                    value={inputValue}
                    onChange={onInputChange}
                />
            </form>

        </>
    )
}
