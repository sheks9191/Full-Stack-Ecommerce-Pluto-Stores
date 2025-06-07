import { Form, useSubmit } from "react-router-dom"
import { FaSearch } from "react-icons/fa";


const SearchInput = () => {
  
    const submit = useSubmit()
   const debounce = (onChange) => {
    let timeout
    return (e) => {
      const form = e.currentTarget.form
      clearTimeout(timeout)  
      timeout = setTimeout(() => {
         onChange(form)
      }, 1000)   
    }
   } 
  return (
    <Form className="search-input">
        <input type="search" name="search" placeholder="Search..." onChange={debounce((form) => {
              submit(form)
             })} />
        <button className="search-btn" type="submit">
          <FaSearch/>
        </button> 
    </Form>
  )
}

export default SearchInput