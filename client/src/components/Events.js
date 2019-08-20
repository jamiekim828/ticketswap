import React, { Component } from 'react';
import EventForm from './EventForm';
import EventsList from './EventsList';

export default class Events extends Component {
  render() {
    return (
      <div>
        <EventsList />
        <EventForm />
      </div>
    );
  }
}
