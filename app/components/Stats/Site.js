import React from 'react';
import {Component} from 'react';
import Table from './Table';
import data from '../../data/github';

class Stats extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }



  componentDidMount() {
    fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=86131db9f90d8e0562c101595b01977d&is_getty=true&tags=''")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render(){

    return(
      <div>
      <h3>Some pictures from my flickr</h3>

    </div>
    )

  }
  

}

export default Stats;
