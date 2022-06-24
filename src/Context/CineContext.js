import { createContext, useState } from 'react'
const FilterContext = createContext()

function FilterProvider({ children }) {
  const [filter, setFilter] = useState({ min: 0, max: 10 })
  const [valueInput, setValueInput] = useState('')
  return (
    <FilterContext.Provider
      value={{
        filter,
        setFilter,
        valueInput,
        setValueInput,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export { FilterContext, FilterProvider }
