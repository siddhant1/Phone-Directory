import React from 'react';

class Subscriber extends React.Component {
  render() {
    const { subscriber, deleteSub } = this.props;
    return (
      <tr>
        <td>{subscriber.name}</td>
        <td>{subscriber.phone}</td>
        <td>
          <button
            onClick={() => deleteSub(subscriber.id)}
            type='button'
            className='btn btn-danger'
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Subscriber;
