import React from 'react';
import $ from 'jquery';

export default class PersonComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: "",
      Age:"",
      Designation:"",
    }
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    var context = this;

    $.ajax({
      url: 'http://localhost:3000',
      method: 'GET',
      success: function(response) {
        context.setState({
          Name: response.Name,
          Age: response.Age,
          Designation: response.Designation,
        });
      }
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.Name.value}</h1>
        <h1>{this.state.Age}</h1>
        <h1>{this.state.Designation}</h1>
      </div>
    );
  }
}
