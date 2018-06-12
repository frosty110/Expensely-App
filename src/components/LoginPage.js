import React from 'react';
import {connect} from 'react-redux';
import {
    startLoginGoogleAuth, 
    startLoginEmailAuth
} from '../actions/auth';
import {Link} from 'react-router-dom';
import {SignUpLink} from './SignUpPage';



class SignInForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            error: null
        };
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {email, password} = this.state;

        this.props.startLoginEmailAuth(email, password);
    }
    
    passwordOnChange =(e) => {
        const password = e.target.value;
        this.setState(()=> ({
            password
        }));
    }

    emailOnChange = (e) => {
        const email = e.target.value;
        this.setState(()=>({
            email
        }));
    }

    render(){
        const {email, password, error} = this.state;
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit} >
                    <div>
                        <input 
                            className="text-input"
                            type="email" 
                            name="emailName" 
                            id="emailId"
                            value={email}
                            onChange={this.emailOnChange}
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <input 
                            className="text-input"
                            type="password" 
                            name="pwName" 
                            id="passwordName"
                            value={password}
                            onChange={this.passwordOnChange}
                            placeholder="Password"
                        />
                    </div>
                    <button className="button">Login</button>
                    {error && <p>{error.message}</p>}
                </form>
            </div>
        )
    }
}

const SignInGoogle = ({startLoginGoogleAuth}) => (
    <div>
        <button className="button" onClick={startLoginGoogleAuth}>Login with Google</button>
    </div>
);

export const LoginPage = ({ startLoginGoogleAuth, startLoginEmailAuth }) => (
    <div>
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Expense-Ly</h1>
                <p>Be the master of your expenses.</p>
                <SignInForm startLoginEmailAuth={startLoginEmailAuth}/>
                <SignUpLink />
                {/* <div className="box-button-container"> */}
                    
                <SignInGoogle startLoginGoogleAuth={startLoginGoogleAuth}/>
                {/* </div> */}
                
            </div>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLoginGoogleAuth: () => dispatch(startLoginGoogleAuth()),
    startLoginEmailAuth: () => dispatch(startLoginEmailAuth())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);