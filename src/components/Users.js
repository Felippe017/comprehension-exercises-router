import React from 'react';

class Users extends React.Component {
  render() {
    const { greetingMessage } = this.props;
    const { id } = this.props.match.params;
    return (
      <div>
        <h2> Users </h2>
        <p> {greetingMessage}, this is my awesome Users {id} component </p>
      </div>
    )
  }
}

export default Users;
