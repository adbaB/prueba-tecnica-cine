import { createContext,useState } from "react";

const FilterContext = createContext()


function FilterProvider(props){
    const [filter, setFilter] = useState({ min: 0, max: 10 });
    const [valueInput,setValueInput] = useState('');
    return(
        <FilterContext.Provider value={
           { filter,
            setFilter,
            valueInput,
            setValueInput}
        }>
            {props.children}
        </FilterContext.Provider>
     )
}

export {FilterContext,FilterProvider}