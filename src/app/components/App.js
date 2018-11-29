import React  from 'react';
import {User} from './User';
import {Main} from './Main';

export class App extends React.Component {
    constructor(){
        super();
    }

    changeUsername(newName){
        this.setState({
            username: newName
        });
    }

    render() {
      return (
        <div className="container">
            <Main changeUsername = {this.changeUsername.bind(this)}  />
            <User username = "Charles"/>
        </div>
      );
    }
  }