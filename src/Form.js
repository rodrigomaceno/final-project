import React from 'react'

function Form(props) {
  
  return (
    <>
        <span><br/><h5>Register New Book</h5></span>
        
        <form id='myForm'>
          <input className='form-control'
                type="text"
                placeholder="Title"
                name="title"
                onChange={props.handleChange}
              />
              &nbsp;&nbsp;&nbsp;
              <input className='form-control'
                type="text"
                placeholder="Author"
                name="author"
                onChange={props.handleChange}
              />
              &nbsp;&nbsp;&nbsp;
              <input className='form-control'
                type="text"
                placeholder="Image url"
                name="image"
                // defaultValue={'_'}
                onChange={props.handleChange}
              />
              &nbsp;&nbsp;&nbsp;
              <input className='form-control'
                type="text"
                placeholder="Synopsis"
                name="synopsis"
                onChange={props.handleChange}
              />
        </form>
              <button className='btn btn-success' onClick={props.createList}> Submit </button>
  </>
  )
}

export default Form;