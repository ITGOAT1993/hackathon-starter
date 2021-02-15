import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";

class Menu extends React.Component {
  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div className="Menu">
        <h1>Kwitter</h1>
        {this.props.isAuthenticated && (
          <div id="menu-links">
            
            <button to="/" onClick={this.handhome}>Home </button>
             <button to="/" onClick={this.handlnotfound}>NotFound </button>
             <button to="/" onClick={this.handlprofile}>Profile </button>
             <button to="/" onClick={this.handleabout}>About </button>
            <button to="/" onClick={this.handleLogout}>Logout </button>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);