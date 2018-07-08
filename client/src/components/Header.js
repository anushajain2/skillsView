import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/header.css';

class Header extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return <a href="/auth/google" className="login">Login With Google</a>;
            default:
                return <a href="/api/logout" className="login">Logout</a>;
        }

    };

    render() {
        return (
            <div className="header">
                <Link to={this.props.auth ? '/mychops' : '/'} className="chopscv"> MY CHOPS CV </Link>
                {this.renderContent()}
            </div>
        );
    }
}

function mapStatetoProps({ auth }) {
    return { auth };
}

export default connect(mapStatetoProps)(Header);