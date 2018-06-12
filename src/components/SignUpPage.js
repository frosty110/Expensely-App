import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import validator from 'validator';
import { createUserWithEmailAndPassword } from '../actions/auth';

import {history} from '../routers/AppRouter';

export const SignUpPage = () => (
    <div>
        <h1>SignUp</h1>
        <SignUpForm/>
    </div>
);

const ErrorMessage = ({error}) => (
    <span>{error}</span>
);

class SignUpForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            email: '',
            passwordOne: '',
            passwordTwo: '',
            isValid: false,
            errors: {
                username: undefined,
                email: undefined,
                passwordOne: undefined,
                passwordTwo: undefined,
            }
        };
    };
    
    onSubmit = (e) => {
        e.preventDefault();
        const {username, email, passwordOne} = this.state;

        if (this.state.isValid){
            createUserWithEmailAndPassword({
                username,
                email,
                password: passwordOne
            });
        }
    }

    usernameOnChange = (e) => {
        const username = e.target.value;
        this.setState(() => ({
            username
        }));
    }

    onDescriptionChange = (e) =>{
        const description = e.target.value;
        this.setState(()=> ({description}));
    }

    validateEmailOnBlur = (e) => {
        const email = e.target.value;


        if (email.length > 0 && !validator.isEmail(email)){
            const error = "Please enter valid email address";
            this.setState((prevState)=>({
                errors : {
                    ...prevState.errors,
                    email: {id: "email", name: error}
                }
            }));
        }
    }
    emailOnChange = (e) => {
        const email = e.target.value;
        
        this.setState(() => ({
            email
        }));

        if (validator.isEmail(email)){
            const formattedEmail = validator.normalizeEmail(email);
            this.setState((prevState)=>({
                email: formattedEmail,
                errors: {
                    ...prevState.errors,
                    email: undefined
                }
            }));
        }
        
        
    }
    passwordOnChange = (e) => {
        const passwordOne = e.target.value;
        this.setState(()=> ({passwordOne}));
    }

    passwordRepeatOnChange = (e) => {
        const passwordTwo = e.target.value;
        this.setState(()=>({passwordTwo}));
    }

    componentDidCatch(error, info) {
        console.log('Error occured:',error, info);
    }

    componentDidUpdate = (prevProps, prevState) => {
        
        if (prevState.errors !== this.state.errors){
            const hasErrorMessage = (Object.values(this.state.errors).filter(error => error != undefined).length > 0);
            console.log(hasErrorMessage);

            this.setState(()=>({
                isValid: !hasErrorMessage
            }));
        }
    }
    cancelSignUp = () => {
        history.push('/');
    }

    render(){
        const {username, email, passwordOne, passwordTwo, errors} = this.state;

        const isInvalid = passwordOne !== passwordTwo
                            || passwordOne === ''
                            || passwordTwo === ''
                            || email === ''
                            || username === ''
                            || !this.state.isValid;

        console.log("isInvalid: ", isInvalid);

        return (
            <div className="content-container">
                <form className="form" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        autoFocus
                        className="text-input"
                        value={username}
                        onChange={this.usernameOnChange}
                    />
                    <input
                        type="text"
                        placeholder="Email Address"
                        autoFocus
                        className="text-input"
                        value={email}
                        onChange={this.emailOnChange}
                        onBlur={this.validateEmailOnBlur}
                    />
                    <input
                        type="Password"
                        placeholder="Password"
                        autoFocus
                        className="text-input"
                        value={passwordOne}
                        onChange={this.passwordOnChange}
                    />
                    <input
                        type="Password"
                        placeholder="Retype Password"
                        autoFocus
                        className="text-input"
                        value={passwordTwo}
                        onChange={this.passwordRepeatOnChange}
                    />

                    <button disabled={isInvalid} type="submit" className="button">Sign Up</button>
                    <button type="button" className="button" onClick={this.cancelSignUp}>Cancel</button>
                
                    {
                        Object.values(errors).map( (error) =>{
                            
                            if (error){
                                // console.log(error);
                                return <ErrorMessage key={error.id} error={error.name}/>
                            }
                        })
                    }
                </form>
            </div>
        );
    }
}



const SignUpLink = () => (
    <p>
        {`Don't have an acount? `}
        <Link to="/signup">Sign Up</Link>
    </p>
);

export default SignUpPage;


export {
    SignUpForm,
    SignUpLink
};