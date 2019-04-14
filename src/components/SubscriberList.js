import React from 'react';
import Subscriber from './Subscriber';
import { Link } from 'react-router-dom';

const SubscriberList = ({ subscribers, deleteSub }) => {
  return (
    <>
      <Link to='/add'>
        <button type='button' className='btn btn-success mt-1 ml-1'>
          Add New Subscriber
        </button>
      </Link>
      <table class='table' hovered={true} bordered={true} striped={true}>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Phone</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {subscribers.map(sub => (
            <Subscriber key={sub.id} deleteSub={deleteSub} subscriber={sub} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SubscriberList;
