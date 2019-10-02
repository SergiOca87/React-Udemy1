import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

//Importing the Components
import CommentDetail from './CommentDetail';
import Card from './Card';
import UserDetail from './UserDetail';

//The css from Semantic UI is hosted inside of the public directory

//Author is a prop here, passint it down from parent to the child Component, the CommentDetail

//We are passing CommentDetail as a prop to the Card component, by nesting it inside

//The point is that Card, can be re-used with other child components inside

const App = () => {
    return(
        <div className="ui container comments">

            <Card>
                <UserDetail 
                    userName="Sam"
                    joinDate="10/02/2018"
                    text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."
                    avatar={ faker.image.avatar() }
                />
             </Card>

            <h3>Comments:</h3>
            <CommentDetail 
                author="Alex"
                timeAgo="Yesterday at 3:30PM"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede."
                avatar={ faker.image.avatar() }
            />

            <CommentDetail 
                author="Jane"
                timeAgo="Yesterday at 2:15PM"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."
                avatar={ faker.image.avatar() }
            />
        </div>
    )
}

ReactDOM.render( <App />, document.querySelector('#root') );