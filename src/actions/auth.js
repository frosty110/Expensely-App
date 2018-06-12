import { firebase, googleAuthProvider } from '../firebase/firebase';
import database from '../firebase/firebase'


export  const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLoginGoogleAuth = () => {
    return ()=>{
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const createUser = ({id, username, email}) => 
    database.ref(`users/${id}/account`).set({
        username,
        email,
    });


export const createUserWithEmailAndPassword = ({username, email, password}) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).then((authUser)=> {
        const id = authUser.user.uid;
        createUser({id, username, password}).then(()=> {
            console.log(id,username,passowrd);
        }); 
    });  
};

export const startLoginEmailAuth = (email, password) =>{
    return  () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(error => {
                console.log(error);
                this.setState(()=> ({
                    error
                }));
            })
    }
};

export const doPasswordReset = (email) => {
    firebase.auth().sendPasswordResetEmail(email);
};

export const doPasswordUpdate = (password) => {
    firebase.auth().currentUser.updatePassword(password);
}



export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return ()=>{
        return firebase.auth().signOut();
    };
};