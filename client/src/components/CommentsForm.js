import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveComment } from '../actions/comments';

class CommentsForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async e => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const ticketsId = this.props.match.params.ticketsId;
    saveComment(id, ticketsId, this.state.text);
    saveComment(this.state);
  };

  render() {
    return (
      <div>
        <div>
          <h4>Comments</h4>
        </div>
        <div>
          <h4>Write your comment</h4>
          <form className='form' onSubmit={this.onSubmit}>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Comment'
                name='text'
                value={this.state.text}
                onChange={this.onChange}
              />
            </div>
            <input
              type='submit'
              className='btn btn-primary'
              value='Upload Comment'
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comment: state.comment
  };
};

const mapDispatchToProps = { saveComment };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsForm);
