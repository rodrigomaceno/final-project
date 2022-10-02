import React from 'react';

function UpdateList(props) {
  const componentId = 'update' + props.elementId
  const dataTarget = '#' + componentId
  return (
    <>
      <button type="button" className="btn btn-primary edit-button" data-target={dataTarget}
        onClick={(e) => { props.getList(e, props.elementId); document.getElementById(dataTarget).removeAttribute("hidden") }}>Edit</button>

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


      <div hidden id={dataTarget}>
        <br />
        <input type="text"
          placeholder="Title"
          name="title"
          value={props.singledata.title}
          onChange={props.handleChange}>
        </input>
        
        <br />

        <input type="text"
          placeholder="Author"
          name="author"
          value={props.singledata.author}
          onChange={props.handleChange}>
        </input>
        
        <br />

        <input type="text"
          placeholder="Image url"
          name="image"
          value={props.singledata.image}
          onChange={props.handleChange}>
        </input>

        <button id='cancel' type="button"
          className="btn btn-warning myButton"
          onClick={(e) => {
            props.getList(e, props.elementId);
            document.getElementById(dataTarget).setAttribute("hidden", '');
            //console.log(document.getElementById(dataTarget));

          }}>Cancel</button>

        <button type="button"
          className="btn btn-success myButton"
          onClick={(event) => {

            props.updateList(event, props.elementId);
            //console.log(event, props.elementId)
          }

          }>Confirm</button>
      </div>
    </>
  )

}

export default UpdateList;