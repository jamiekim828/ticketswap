import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment } from '../actions/comments';

class CommentsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: {},
      comments_form: { text: '' }
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.setState();
  }

  onChange(e) {
    console.log('commentform.change.props', this.props);
    this.state.comments_form[e.target.name] = e.target.value;
  }

  onSubmit(e) {
    console.log('this.props', this.props);
    e.preventDefault();
    const id = this.props.tickets.eventsId;
    const ticketsId = this.props.tickets.id;

    this.props.saveComment(id, ticketsId, this.state.comments_form);
  }

  render() {
    console.log('commentform.render.props', this.props, 'state', this.state);
    return (
      <div>
        <div>
          <h4>Comments</h4>
        </div>
        <div>
          <h4>Write your comment</h4>
          <form className='form'>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Comment'
                name='text'
                value={this.state.comments_form.text}
                onChange={e => this.onChange(e)}
              />
            </div>
            <input
              type='button'
              className='btn-primary'
              value='Upload Comment'
              onClick={e => this.onSubmit(e)}
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('comments From state', state);
  return {
    comments_form: state.comments_form,
    tickets: state.tickets
  };
};

const mapDispatchToProps = { saveComment };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsForm);
