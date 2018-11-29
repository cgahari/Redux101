import React from 'react';

export const Main = (props) => {
        return(
            <div className="row">
                <div className="col-xs-12">
                    <h1>The Main Page</h1>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                    <button 
                        className="btn btn-primary" 
                        onClick={() => props.changeUsername('crg')}>
                        Change the Username
                    </button>
                    </div>
                </div>    

            </div>
        );
};