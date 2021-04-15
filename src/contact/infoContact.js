import React, { Component } from "react";

export default class infoContact extends Component {
  constructor() {
    super();

    this.state = {
      id:"",
      firstname: "",
      lastname: "",
      gender: "",
      destination: "",
      isEdit:false
    };
  }

  ContactOnchange = (e) => {
    const { value, name } = e.target;
    
    this.setState({
      [name]:value
    })

    
  };
  infoSubmit = (e) =>{

   e.preventDefault();

    

    if(!this.state.isEdit){
      let data = {
        isEdit:this.state.isEdit,
        firstname:this.state.firstname,
        lastname:this.state.lastname,
        gender:this.state.gender,
        destination:this.state.destination
      }
  
      this.props.myData(data)

    }else{
      let data = {
        isEdit:this.state.isEdit,
        id:this.state.id,
        firstname:this.state.firstname,
        lastname:this.state.lastname,
        gender:this.state.gender,
        destination:this.state.destination
      }
  
      this.props.myData(data)

    }
    
    
  }
  componentWillReceiveProps(props){
    
    if(props.setform.id != null){

      this.setState({
        id:props.setform.id,
        firstname:props.setform.firstname,
        lastname:props.setform.lastname,
        gender:props.setform.gender,
        destination:props.setform.destination,
        isEdit:true
      })
    

    }

  }

  render() {
    return (
      <div>
        <form onSubmit={this.infoSubmit} autoComplete="off">

          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              onChange={this.ContactOnchange}
              value={this.state.firstname}
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              onChange={this.ContactOnchange}
              value={this.state.lastname}
            />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <input
              type="text"
              className="form-control"
              name="gender"
              onChange={this.ContactOnchange}
              value={this.state.gender}
            />
          </div>
          <div className="form-group">
            <label>Destination:</label>
            <input
              type="text"
              className="form-control"
              name="destination"
              onChange={this.ContactOnchange}
              value={this.state.destination}
            />
          </div>

          <button type="submit" className="btn btn-success ">
           {this.state.isEdit ? "Update" :"Create"}
          </button>
        </form>
      </div>
    );
  }
}
