import React, { Component } from "react";
import InfoContact from "./contact/infoContact";
import Test from "./contact/test";

import axios from "axios"







export default class App extends Component {

  constructor(){
    super();
    this.state ={
      data:[],
      editData:[]
    }
  }
 



  create = (data) => {
   if(!data.isEdit){
    axios.post("http://127.0.0.1:8000/api/contacts",data).then(res =>{
      
      console.log(res)
      this.getAll()
    });
   }
   else{
    axios.put('http://localhost:8000/api/contacts/' + this.state.editData.id,data)
    .then((res) => {
      console.log(res.data)
      console.log('Expense successfully updated')
    }).catch((error) => {
      console.log(error)
    })
    //console.log(data)

   }
   
  };


   componentDidMount(){
     this.getAll()

   }

   getAll(){
     axios.get("http://127.0.0.1:8000/api/contacts").then(res=>{
       console.log(res.data)
    
      this.setState({
        data:res.data
      })


     })
   }

   update =(data) =>{

    console.log(data)

    this.setState({
      editData:data
    })


   }


  render() {
    return (
      <div className="container mt-4">
        <div className="row ">
          <div className="col-6">
            <InfoContact myData={this.create} setform={this.state.editData} />
          </div>
          <div className="col-6">
            <Test  getdata = {this.state.data} setdata = {this.update} />
          </div>
        </div>
      </div>
    );
  }
}
