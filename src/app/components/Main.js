import React from 'react';

export class Main extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs-12">
                    <h1>The Main Page</h1>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                    <button 
                        className="btn btn-primary" 
                        onClick={() => this.props.changeUsername('crg')}>
                        Change the Username
                    </button>
                    </div>
                </div>    

            </div>
        );
    }
}