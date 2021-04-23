import React, {useState} from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {
    const [inputValue, setinputValue] = useState({input: '', select: 5})
    
    const handleInputChange = (e) => {
        const inputNew = {...inputValue}
        inputNew.input = e.target.value
        setinputValue(inputNew)
    }

    const handleSelectChange = (e) => {
        const inputNew = {...inputValue}
        inputNew.select = e.target.value
        setinputValue(inputNew)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.input.trim().length > 2) {
            const newCategory = {
                filter: parseInt(inputValue.select),
                query: inputValue.input
            }
            setCategories(categories => [newCategory, ...categories])
            setinputValue({input: '', select: 5})
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue.input || ''}
                onChange={handleInputChange}
            />
            <select 
                value={inputValue.select || ''}
                onChange={handleSelectChange}
            >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
            </select>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};


export default AddCategory
