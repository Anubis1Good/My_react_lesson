export const Sibling1 = ({ onChange }) => {
    const handleChange = (event) => {
        onChange(event.target.value)
    }

    return <input type="text" 
                  onChange={handleChange} />
}
