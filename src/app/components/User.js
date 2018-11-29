import React from 'react';

export const User = (props) =>{
        return(
            <div className="row">
                <div className="col-xs-12">
                    <h1>The User Page</h1>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <p>User Name : {props.username}</p>
                    </div>
                </div>    

            </div>
        );
}
