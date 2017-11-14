import React, { Component } from 'react';
import Router from 'react-router';
import {Panel, Input, Button} from 'react-bootstrap';
import { History } from 'history';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Login from './Login'

export default class Signup extends Component {

  state = {
    email: '',
    password : '',
    passwordConfirmation: ''
  }

  handleSignup = (e) => {
    e.preventDefault()
    console.log("Hello")
  }

  handleEmailChange = (e) => {
    const email = e.target.value
    this.setState({email}) 
  }

  handlePasswordChange = (e) => {
    const password = e.target.value
    this.setState({password}) 
  }

  handlePasswordConfirmationChange = (e) => {
    const passwordConfirmation = e.target.value
    this.setState({password}) 
  }

  render() {
    return(
        <div className="login-page ng-scope ui-view"> 
          <div className="row"> 
            <div className="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4"> 
              <img src={require("../../assets/images/flat-avatar.png")} className="user-avatar" /> 
              <h1>Ani Theme <small>Free React.js Edition</small></h1> 
              <form role="form" onSubmit={this.handleSignup} className="ng-pristine ng-valid"> 
                <div className="form-content"> 
                  <div className="form-group"> 
                    <input type="text" className="form-control input-underline input-lg" onChange={this.handleEmailChange} value={this.state.email} placeholder="Email" /> 
                  </div> 
                  <div className="form-group"> 
                    <input type="password" className="form-control input-underline input-lg" onChange={this.handlePasswordChange} value={this.state.password} placeholder="Password" /> 
                  </div> 
                  <div className="form-group"> 
                    <input type="password" className="form-control input-underline input-lg" onChange={this.handlePasswordConfirmationChange} value={this.state.passwordConfirmation} placeholder="Password Confirmation" /> 
                  </div> 
                </div> 
                <button type="button" className="btn btn-white btn-outline btn-lg btn-rounded" onClick={() => this.props.history.push('/login')} >Login</button> 
                <button type="submit" className="btn btn-white btn-outline btn-lg btn-rounded">Sign Up</button> 
              </form> 
            </div> 
          </div> 
        </div> 
    )
  }
}