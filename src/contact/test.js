import React, { Component } from "react";

export default class test extends Component {
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Gender</th>
              <th scope="col">Destination</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
          
            {this.props.getdata.map(e =>(
                
                <tr >
                    
                    <td key="id">{e.firstname}</td>
                    <td>{e.lastname}</td>
                    <td>{e.gender}</td>
                    <td>{e.destination}</td>
                    <td><button className="btn btn-primary" onClick ={ev =>{
                        
                        this.props.setdata(e)
                    }} >Edit</button></td>
                    <td><button className="btn btn-danger">Delete</button></td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
