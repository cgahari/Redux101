import React  from 'react';
import {render} from 'react-dom';
import './index.css';
//import * as serviceWorker from './serviceWorker';
import {User} from './app/components/User';
import {Main} from './app/components/Main';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            username : "goodchar"
        };
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
            <User username = {this.state.username}/>
        </div>
      );
    }
  }

render(
<App />, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
