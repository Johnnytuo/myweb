import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Personal from '../../components/Stats/Personal';
import Site from '../../components/Stats/Site';
import GoogleLogin from 'react-google-login';



class Google extends Component {
    content =null;
    state = {
        isLoggedIn: false,
        name: "",
        email: "",
      };

logout = () => {
  this.setState({        
    isLoggedIn: false,
    name: "",
    email: "",
    })
};

responseGoogle = (response) => {
  console.log(response);
  this.setState({
    isLoggedIn: true,
    name: response.name,
    email: response.email,
  });

};

render() {

  if(!this.state.isLoggedIn){
    this.content =(
      <GoogleLogin
      clientId="430049250727-ta4ftrgclnubm6nb3lf2sm8ub0rk39ea.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
      buttonText="LOGIN WITH GOOGLE"
      onSuccess={this.responseGoogle}  
      onFailure={this.responseGoogle}
      callback={this.responseGoogle}
      />
    )
  }else{
    this.content =(
   
        <div>
        <Helmet title="Stats" />
        <article className="post" id="stats">
          <header>
            <div className="title">
              <h2><Link to="/stats">Stats</Link></h2>
            </div>
          </header>
          <button onClick={this.logout} className="button">Log out</button>    
          <Personal />
          <Site />
        </article>
        </div>
    );
  }

  return(
    <div>
      {this.content}
    </div>
   
  )
}

  

}

  
  
  
  


export default Google;
