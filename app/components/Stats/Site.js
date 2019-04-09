import React from 'react';
import {Component} from 'react';
import Table from './Table';
import data from '../../data/github';

class Stats extends Component { 
  constructor(){
    super();
    this.state = {
      pictures: [],
    };
  }


  // "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=dbb49a0e2dcc3958834f1b92c072be62&user_id=62373850%40N05&sort=interestingness-desc&extras=url_n&format=json&jsoncallback=?"

  //https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=86131db9f90d8e0562c101595b01977d&user_id=164753793@N06&extras=url_n&format=json&nojsoncallback=?

  componentDidMount() {
    fetch("https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=86131db9f90d8e0562c101595b01977d&user_id=164753793@N06&extras=url_n&format=json&nojsoncallback=?")
      .then(function(re){
        return re.json();
      })
      .then(function(j){
        let picArray = j.photos.photo.map((pic) =>{
          var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
          return(
            <img alt="dogs" src={srcPath}></img>
          )
        
      })
      this.setState({pictures:picArray});

    }.bind(this)
    )
  }

  render(){
    // var {isLoaded, items} =this.state;
    // if(!isLoaded){
    //   return <div> loading..</div>
    // }else{
    //   var json = JSON.parse(items);
      
      return(
        <div>
          
        <h3>Some pictures from my flickr</h3>
        <div className="picture">
          {this.state.pictures}
        </div>
      </div>
      );
    
    

  }
  

}

export default Stats;
