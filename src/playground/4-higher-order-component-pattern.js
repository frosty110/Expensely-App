

// higher order component (HOC) - a component that renders another component
// goal: reuse code
// utilize Render highjacking
// prop manipulation
// abstract state

import React from 'react';
import ReactDOM from 'react-dom';


// info component
const Info = (props) => (
    <div>
        <h1> Info </h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {

    // this is the higher order component where we are nesting the WrappedComponent and returning a new component
    // we use the spread operator to spread out all the keys in curley brackets
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please do not share!</p>}
            <WrappedComponent {...props}/> 
        </div>
    );

};

/// requireAuthentication regular arrow functions
const requireAuthentication = (WrappedComponent) => {
    // returns higher order component
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p> Login to view </p>
            )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details" />, document.getElementById('app'));