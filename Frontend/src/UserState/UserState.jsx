import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class UserState extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <div className="user-action">
                <h5 className="user-state">
                    {this.props.currentState}
                </h5>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {};
}

const connectedLoginPage = connect(mapStateToProps)(UserState);
export { connectedLoginPage as UserState };