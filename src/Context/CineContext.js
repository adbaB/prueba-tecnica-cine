import { createContext,useState } from "react";

const FilterContext = createContext()


function FilterProvider(props){
   
    const [valueInput,setValueInput] = useState('');
    return(
        <FilterContext.Provider value={
           {
            valueInput,
            setValueInput}
        }>
            {props.children}
        </FilterContext.Provider>
     )
}

export {FilterContext,FilterProvider}