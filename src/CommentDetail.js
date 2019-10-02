//React components are written in Capitals, it's convention
import React from 'react';


//
const CommentDetail = ( props ) => {

    console.log(props);
    //All of the props we have passed down from the parent

    return(
        <div className="comment">
            <a href="/" className="avatar">
                <img src={ props.avatar } alt="avatar" />    
            </a>
            <div className="content">
                <a href="/" className="author">
                    { props.author } 
                </a>
                <div className="metadata">
                    <span className="date">
                        { props.timeAgo }
                    </span>
                </div>
                <div className="text">
                    { props.text }
                </div>
            </div>    
        </div> 
    )
}

export default CommentDetail