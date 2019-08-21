import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';
import { saveTicket } from '../actions/tickets';

const TicketForm = ({ saveTicket }, ticket) => {
  const [formData, setFormData] = useState({
    title: '',
    picture: '',
    price: '',
    description: ''
  });

  const { title, picture, price, description } = formData;

  const componentDidMount = () => {
    const id = this.props.match.params.id;

    this.props.saveTicket(id);

    this.setState();
  };

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    saveTicket({ title, picture, price, description });
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Upload Ticket!</h1>
      <p className='lead'>
        <i className='ticketform' />
        Supply all informations below
      </p>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Title'
            name='title'
            value={title}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='picture'
            placeholder='Image URL'
            name='picture'
            value={picture}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='price'
            placeholder='Price'
            name='price'
            value={price}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='description'
            placeholder='Description'
            name='description'
            value={description}
            onChange={e => onChange(e)}
          />
        </div>

        <input type='submit' className='btn btn-primary' value='Upload' />
      </form>
    </Fragment>
  );
};

TicketForm.propTypes = {
  saveTicket: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  console.log('Ticket form state', state);
  return {
    ticket: state.ticket
  };
};

const mapDispatchToProps = { saveTicket };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketForm);
