import React from 'react';


function DeleteList(props) {
  
  return (
    <>
   
    <button type="button"
      className="btn btn-danger edit-button"

      onClick={(event) => props.deleteList(event, props.elementId)}>Delete</button>
    </>
  )
}

export default DeleteList;