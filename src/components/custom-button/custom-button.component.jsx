import React from "react";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps} >
        { children }
    </button>
);

export default CustomButton;