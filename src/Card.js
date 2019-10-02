//React components are written in Capitals, it's convention
import React from 'react';


//
const Card = ( props ) => {

    console.log(props);
    //All of the props we have passed down from the parent

    return(
        <div className="ui card">
           <div classNAme="card-body">
                { props.children }
            </div>
            
            <div className="extra content">
                
            </div>
         
            <div className="extra content">
                <p>Card Footer</p>
            </div>
        </div>
    )
}

export default Card