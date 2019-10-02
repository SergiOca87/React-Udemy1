//React components are written in Capitals, it's convention
import React from 'react';


//
const UserDetail = ( props ) => {

    console.log(props);
    //All of the props we have passed down from the parent

    return(
        <div>
            <a href="/" className="image">
                <img src={ props.avatar } alt="avatar" />    
            </a>
            <div className="content">
                <a href="/" className="author">
                    { props.userName } 
                </a>
                <div className="metadata">
                    <span className="date">
                        Joined in: { props.joinDate }
                    </span>
                </div>
                <div className="text">
                    { props.text }
                </div>
            </div>    
        </div> 
    )
}

export default UserDetail