import React from 'react';

export class User extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs-12">
                    <h1>The User Page</h1>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <p>User Name : {this.props.username}</p>
                    </div>
                </div>    

            </div>
        );
    }
}
