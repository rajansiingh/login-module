import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import { UserState } from '../UserState';

class HomePage extends React.Component {
  componentDidMount() {
      this.props.dispatch(userActions.getAll());
    }

  handleDeleteUser(id) {
      return (e) => this.props.dispatch(userActions.delete(id));
    }

  render() {
      const { user, users } = this.props;
      return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.username.toUpperCase()}!</h1>
                <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.username }
                                {user.isLoggedIn ? <span className="text-success pl-5">Online</span> : <span className="text-danger pl-5">Offline</span> }
                                {/* {
                                    user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                } */}
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
                {user ? <UserState currentState="Logged In" /> : <UserState currentState="Logging Out" /> }
            </div>
        );
    }
}

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
      user,
      users,
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
