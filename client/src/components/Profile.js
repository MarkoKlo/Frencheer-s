import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import Chart from "./Chart";

class Profile extends Component {

  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      errors: {},
      chartData:{
        
    }
    }
  }


  componentWillMount(){
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email
    })
    this.getChartData();
  }
  

  getChartData(){
    this.setState({
      chartData:{
        labels:['Mojito','Kir Royal','Kir','Pina Colada','Ti Punch','Margarita','Gin Tonic','Tequilla','Sans alcool','Gin Fizz'],
                  datasets:[
                      {
                          label:'pourcentage de français qui en consomme',
                          data:[
                              56,
                              46,
                              43,
                              31,
                              29,
                              25,
                              23,
                              22,
                              21,
                              20
                          ],
                          backgroundColor:[
                               'rgba(192,57,43)',
                               'rgba(155,89,182)',
                               'rgba(41,128,185)',
                               'rgba(26,188,156)',
                               'rgba(39,174,96)',
                               'rgba(241,196,15)',
                               'rgba(230,126,34)',
                               'rgba(236,240,241)',
                               'rgba(149,165,166)',
                               'rgba(52,73,94)'
                          ]
                      }
                  ]
              } 
      
    })
  }

  render() {
    return (
        <div>
        <div className="jumbotron text-center">
        <h1>PROFILE</h1>
        <p></p> 
        </div>
        
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h3>First Name : </h3>
            <p>{this.state.first_name}</p>
          </div>
          <div className="col-sm-4">
            <h3>Last Name : </h3>
            <p>{this.state.last_name}</p>
          </div>
          <div className="col-sm-4">
            <h3>Email : </h3>        
            <p>{this.state.email}</p>
          </div>
        </div>
        <Chart chartData={this.state.chartData} location="Alcools préférés" egendPosition="bottom"/>
      </div>
      </div>
    )
  }
}

export default Profile