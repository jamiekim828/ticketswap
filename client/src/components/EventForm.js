import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';
import { saveEvent } from '../actions/events';

const EventForm = ({ saveEvent }, event) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    picture: '',
    startdate: '',
    enddate: ''
  });

  const { name, description, picture, startdate, enddate } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  console.log('form input');

  const onSubmit = async e => {
    e.preventDefault();
    console.log('Event Upload');
    saveEvent({ name, description, picture, startdate, enddate });
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Create Event</h1>
      <p className='lead'>
        <i className='eventform' />
        Supply all informations below
      </p>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='name'
            name='name'
            value={name}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='description'
            placeholder='description'
            name='description'
            value={description}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='picture'
            placeholder='image url'
            name='picture'
            value={picture}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='startdate'
            placeholder='dd-mm-year'
            name='startdate'
            value={startdate}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='enddate'
            placeholder='dd-mm-year'
            name='enddate'
            value={enddate}
            onChange={e => onChange(e)}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Upload' />
      </form>
    </Fragment>
  );
};

EventForm.propTypes = {
  saveEvent: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  console.log('EVENT FORM state', state);
  return {
    event: state.event
  };
};

const mapDispatchToProps = { saveEvent };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
