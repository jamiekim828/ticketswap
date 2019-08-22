import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Fragment } from 'react';
import { saveTicket } from '../actions/tickets';

class TicketForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets_form: { title: '', picture: '', price: '', description: '' }
    };
  }

  componentDidMount() {
    this.setState();
  }

  onChange(e) {
    //{ [e.target.name]: e.target.value;
    console.log(e);
    this.state.tickets_form[e.target.name] = e.target.value;
  }

  onSubmit2(e) {
    console.log(this.props);

    // const id = this.props.match.params.id;
    console.log('shshshshshshshshshshshshshshshshsh');
    console.log(this.state);
    // e.preventDefault();
    saveTicket(this.props.event.id, this.state.tickets_form);
    console.log('shshshshshshshshshshshshshshshshsh');
  }

  render() {
    console.log('hello props', this.props);
    const tickets = this.props;
    return (
      <div>
        <h1 className='large text-primary'>Upload Ticket!</h1>
        <p className='lead'>
          <i className='ticketform' />
          Supply all informations below
        </p>
        <form className='form'>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Title'
              name='title'
              value={tickets.title}
              onChange={e => this.onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='picture'
              placeholder='Image URL'
              name='picture'
              value={tickets.picture}
              onChange={e => this.onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='price'
              placeholder='Price'
              name='price'
              value={tickets.price}
              onChange={e => this.onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='description'
              placeholder='Description'
              name='description'
              value={tickets.description}
              onChange={e => this.onChange(e)}
            />
          </div>

          <input
            type='button'
            className='btn btn-primary'
            value='Upload Ticket'
            onClick={e => this.onSubmit2(e)}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('Ticket form state', state);
  return {
    tickets_form: state.tickets_form
  };
};

const mapDispatchToProps = {
  saveTicket
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketForm);
