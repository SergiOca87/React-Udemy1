import React from 'react';
import ReactDOM from 'react-dom';

//Importing the comment component
import CommentDetail from './CommentDetail';

//The css from Semantic UI is hosted inside of the public directory

const App = () => {
    return(
        <div className="ui container comments">
            <CommentDetail />

            <CommentDetail />

            <CommentDetail />
        </div>
    )
}

ReactDOM.render( <App />, document.querySelector('#root') );