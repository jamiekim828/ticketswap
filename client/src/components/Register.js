import React, { Component, Fragment } from 'react';
import { register } from '../actions/register';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Register extends Component {
  state = {
    users: {
      name: '',
      email: '',
      password: '',
      password2: ''
    }
  };

  onChange = e => {
    console.log('e.target.value', e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log('this.state', this.state);
    const newUser = this.state;
    this.props.register(newUser.name, newUser.email, newUser.password);
  };

  componentDidUpdate() {
    console.log('cdu');
  }

  render() {
    console.log('register', this.props.register);
    console.log('this.state.users', this.state.users);

    return (
      <Fragment>
        <h1 className='large text-primary'>Sign Up</h1>
        <p className='lead'>
          <i className='fas fa-user' />
          Create Account
        </p>
        <form className='form' onSubmit={this.onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={this.state.users.name}
              onChange={e => this.onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={this.state.users.email}
              onChange={e => this.onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={this.state.users.password}
              onChange={e => this.onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Confirm Password'
              name='password2'
              value={this.state.users.password2}
              onChange={e => this.onChange(e)}
            />
          </div>
          <input type='submit' className='btn btn-primary' value='Register' />
        </form>
        <p className='my-1'>
          Already have an account? <Link to='/login'>Login</Link>
        </p>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log('msp state', state);
  return {
    token: state.register.token,
    users: state.register.user
  };
};

const mapDispatchToProps = { register };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
