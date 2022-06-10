import React from 'react'

const Delete = ({id, handleDelete}) => {
    const handleClick = (e) => {
        e.preventDefault()
        handleDelete(id);
        console.log(handleDelete)
    }
    return (
        <button onClick={handleClick}>
            X
        </button>
    )
}

export default Delete