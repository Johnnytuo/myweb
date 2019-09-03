import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import Main from '../layouts/Main';
import Personal from '../components/Stats/Personal';
import Site from '../components/Stats/Site';
import Google from '../components/Template/googlelog.js';

class Stats extends Component {

// content;

render() {

  // if(Google.content ==null){
  //   content =(
  //     <GoogleLogin
  //     clientId="430049250727-ta4ftrgclnubm6nb3lf2sm8ub0rk39ea.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
  //     buttonText="LOGIN WITH GOOGLE"
  //     onSuccess={this.responseGoogle}  
  //     onFailure={this.responseGoogle}
  //     callba
  //     />
  //   )
  // }

  // console.log(this.state.isAuthenticated)
  // if(!this.state.isAuthenticated){
    
  // }else{
  //   content = (
  
  //   )



  return(

    <Main>
    <div>
      <Google />
    </div>
   </Main>
  )
}

  

}

  
  
  
  


export default Stats;
