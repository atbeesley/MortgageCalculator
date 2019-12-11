import React from 'react'
import MortForm from '../components/MortForm'
import MortDetail from '../components/MortDetail'

class MortCalcBox extends React.Component {

constructor(props){
  super(props);
  this.state = {
    salaryTotal: 0
  }
  this.maxMortgage = this.maxMortgage.bind(this);
  this.handleFormSubmit = this.handleFormSubmit.bind(this);

}

handleFormSubmit(salaryTotal){
   this.setState({salaryTotal})
}



maxMortgage(){
  return this.state.salaryTotal * 3;
}


render(){
  return (
    <div>
    <h1>
    Snazzy Mortgage Calculator
    </h1>
    <MortForm
    onFormSubmit={this.handleFormSubmit}
    />
    <MortDetail
    finalTotal={this.maxMortgage()}
    />
    </div>
  )
}

}
export default MortCalcBox
