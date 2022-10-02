import React from 'react'
import UpdateList from './UpdateList';
import DeleteList from './DeleteList';

function Lists(props) {
    var rows = [];
    props.alldata.forEach(element => {
        rows.push(
        <tr key={element.id}>
            <td>{element.id}</td>
            <td><img width={'100px'} src={element.image}/></td>
            <td>{element.title}</td>
            <td>{element.author}</td>
            
            <td><UpdateList
                elementId={element.id}
                singledata={props.singledata}
                getList={props.getList}
                updateList={props.updateList}
                handleChange={props.handleChange}></UpdateList></td>
            <td>
                <DeleteList
                elementId={element.id}
                singledata={props.singledata}
                getList={props.getList}
                deleteList={props.deleteList}></DeleteList>
            </td>
        </tr>)
    });
    return(
        <>
        <h5>Catalog</h5>
        <div className='myTable'>
      <table className="table table-light table-hover">
          <thead>
              <tr>
                  <th>#</th>
                  <th>Book Cover</th>
                  <th>Title</th>
                  <th>Author</th>
                  
                  <th></th>
                  <th></th>
                  
              </tr>
          </thead>
        <tbody>{rows}</tbody>
      </table>
      </div>
      </>
    )
}

export default Lists;