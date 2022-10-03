import React from "react";
import Form from "../Form";
import Lists from "../Lists";
import '../App.css';


class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      alldata: [],
      singledata: {
        title: "",
        author: "",
        image: "",
        synopsis: ""
      }
    };
    this.getLists = this.getLists.bind(this);
    this.getList = this.getList.bind(this);
    this.createList = this.createList.bind(this);
    this.updateList = this.updateList.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  getLists() {
    this.setState({ loading: true }, () => {
      fetch("http://localhost:3002/books")
        .then(res => res.json())
        .then(result =>
          this.setState({
            loading: false,
            alldata: result
          })
        )
        .catch(console.log);
    });
  }


  componentDidMount() {
    this.getLists();
  }


  handleChange(event) {
    var title = this.state.singledata.title;
    var author = this.state.singledata.author;
    var image = this.state.singledata.image;
    var synopsis = this.state.singledata.synopsis;
    
    if (event.target.name === "title") title = event.target.value;
    if (event.target.name === "author") author = event.target.value;
    if (event.target.name === "image") image = event.target.value; // THis if solved the issue with image icon displaying when there image field was empty
    if (event.target.name === "synopsis") synopsis = event.target.value;

    this.setState({
      singledata: {
        title: title,
        author: author,
        image: image,
        synopsis: synopsis
      }
    });
  }

  createList() {
    console.log(this.state.singledata)
    if(this.state.singledata.title === '' || this.state.singledata.author === '')
    { }
    else{
    fetch("http://localhost:3002/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.singledata)
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          singledata: {
            title: "",
            author: "",
            image: "",
            synopsis: ""
          }
        });
        this.getLists();
      });
    document.getElementById('myForm').reset()
  }
}

// gets the current values for each data
  getList(event, id) {
    // This is where I load the input values that were typed in
    this.setState(
      {
        singledata: {
          title: "Loading...",
          author: "Loading...",
          // This corrects the Loading... from displaying when field is empty
          image: "Loading...", 
          synopsis: "Loading..."
        }
      },
      () => {
        fetch("http://localhost:3002/books/" + id)
          .then(res => res.json())
          .then(result => { 
            // right here too
            this.setState({
              singledata: {
                title: result.title,
                author: result.author ? result.author : "",
                image: result.image,
                synopsis: result.synopsis 
              }
            });
          });
      }
    );
  }

  updateList(event, id) {
    
    if (this.state.singledata.author === '' || this.state.singledata.title === ''){
    
    }else{
      fetch("http://localhost:3002/books/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.singledata)
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          singledata: {
            title: "",
            author: "",
            image: "",
            synopsis: ""
          }
        });
        this.getLists();
      });
    }
  }

  deleteList(event, id) {
    
    let b = prompt('Are you sure you want to delete this?')
    console.log(b)
    if( b === "" || b === null){

    }else if(b === "y" || b === "Y" || b === "yes" || b === "Yes" || b === "YES"){
    fetch("http://localhost:3002/books/" + id, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          singledata: {
            title: "",
            author: "",
            image: "",
            synopsis: ""
          }
        });
        this.getLists();
      });
    }
  }

  render() {
    const listTable = this.state.loading ? (
      <span>Loading...</span>
    ) : (
      <Lists
        alldata={this.state.alldata}
        singledata={this.state.singledata}
        getList={this.getList}
        updateList={this.updateList}
        deleteList={this.deleteList}
        handleChange={this.handleChange}
      />
    );
    return (
      <>
                
        <div className="container">
          <Form singledata={this.state.singledata}
            createList={this.createList}
            handleChange={this.handleChange} getList={this.getList} />
        </div>
        <br />
        <div className="container">
          {listTable}
        </div>
      </>
    );
  }
}

export default MyApp;


