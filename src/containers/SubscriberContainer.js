import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SubscriberList from '../components/SubscriberList';
import SubscriberForm from '../components/SubscriberForm';
class SubscriberContainer extends React.Component {
  state = { subscribers: [] };

  addSubscriber = data => {
    this.setState({ subscribers: this.state.subscribers.concat(data) });
  };

  deleteSubscriber = id => {
    const newState = this.state.subscribers.filter(sub => sub.id !== id);
    this.setState({ subscribers: newState });
  };

  render() {
    return (
      <Switch>
        <Route
          exact
          path='/'
          component={() => (
            <SubscriberList
              deleteSub={this.deleteSubscriber}
              subscribers={this.state.subscribers}
            />
          )}
        />
        <Route
          path='/add'
          component={() => (
            <SubscriberForm addSubscriber={this.addSubscriber} />
          )}
        />
      </Switch>
    );
  }
}

export default SubscriberContainer;
