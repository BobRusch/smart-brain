import React from "react";
import { APIPost } from "../../utilities/APIutilities";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
    };
  }

  onFormChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  saveAuthTokenInSessions = (token) => {
    window.localStorage.setItem("token", token);
  };

  onSubmitRegistration = () => {
    APIPost("register", {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.userId) {
          this.saveAuthTokenInSessions(data.token);
          this.props.loadUser(data.user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    return (
      <article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center'>
        <main className='pa4 black-80'>
          <div className='measure'>
            <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
              <legend className='f1 fw6 ph0 mh0'>Register</legend>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6' htmlFor='name'>
                  Name
                </label>
                <input
                  className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black'
                  type='text'
                  name='name'
                  id='name'
                  onChange={this.onFormChange}
                />
              </div>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6' htmlFor='email-address'>
                  Email
                </label>
                <input
                  className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black'
                  type='email'
                  name='email'
                  id='email-address'
                  onChange={this.onFormChange}
                />
              </div>
              <div className='mv3'>
                <label className='db fw6 lh-copy f6' htmlFor='password'>
                  Password
                </label>
                <input
                  className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black'
                  type='password'
                  name='password'
                  id='password'
                  onChange={this.onFormChange}
                />
              </div>
            </fieldset>
            <div className=''>
              <input
                onClick={this.onSubmitRegistration}
                className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                type='submit'
                value='Register'
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
