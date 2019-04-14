import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import uuid from 'uuid';
class SubscriberForm extends React.Component {
  state = { name: '', phone: '' };
  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(current => {
      return {
        [name]: value
      };
    });
  };

  handleSubmit = () => {
    const newSub = { ...this.state, id: uuid() };
    this.props.addSubscriber(newSub);
    this.props.history.push('/');
  };
  render() {
    return (
      <form>
        <Link to='/'>
          <button type='button' className='btn btn-success mt-1 ml-1'>
            Back
          </button>
        </Link>
        <div className='form-group'>
          <label htmlFor='formGroupExampleInput'>Enter Name</label>
          <input
            name='name'
            type='text'
            className='form-control'
            placeholder='Enter Name'
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div class='form-group'>
          <label>Enter Phone Number</label>
          <input
            name='phone'
            type='text'
            class='form-control'
            placeholder='Enter Phone Number'
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </div>
        <h3>Subscriber To be Added</h3>
        <div>Name : {this.state.name}</div>
        <div>Phone: {this.state.phone}</div>
        <button
          type='button'
          className='btn btn-success mt-4 ml-1'
          onClick={this.handleSubmit}
        >
          Add
        </button>
      </form>
    );
  }
}

export default withRouter(SubscriberForm);
