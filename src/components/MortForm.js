import React from 'react'

class MortForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      salary1: 0,
      salary2: 0
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInputChange(event){
    if (event.target.name === 'salary1'){
      this.setState({salary1: Number(event.target.value)})
    } else {
      this.setState({salary2: Number(event.target.value)})
  }
  }

  salaryTotal(){
    return this.state.salary1 + this.state.salary2;
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.onFormSubmit(this.salaryTotal())
  }

render(){
    return (

      <form onSubmit={this.handleSubmit}>
      Enter your salary:
      <input
      type="int"
      name="salary1"
      onChange={this.handleInputChange}
      />
      <br>
      </br>
      Enter your partner's salary:
      <input
      type="int"
      name="salary2"
      onChange={this.handleInputChange}
      />
      <br>
      </br>
      <input type="submit" value="Submit"/>
      </form>
  )
}
}

export default MortForm;
