import React, { useState } from 'react';
import './AuthStyles.css';
import CSPRIME from '../Assets/CSPRIME.png';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [status, setStatus] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!isLogin && password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        setError('');
        setStatus('');
        setIsSubmitting(true);

        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
                navigate('/', { state: { successMessage: 'Login successful. Welcome back!' } });
            } else {
                await createUserWithEmailAndPassword(auth, email, password);
                navigate('/', { state: { successMessage: 'Account created successfully. Welcome to CSPRIME!' } });
            }
            setPassword('');
            setConfirmPassword('');
        } catch (firebaseError) {
            const messages = {
                'auth/email-already-in-use': 'An account already exists with this email.',
                'auth/invalid-credential': 'Invalid email or password.',
                'auth/invalid-email': 'Please enter a valid email address.',
                'auth/weak-password': 'Password must be at least 6 characters.',
                'auth/user-not-found': 'No account exists with this email.',
                'auth/wrong-password': 'Invalid email or password.',
            };
            setError(messages[firebaseError.code] || 'Authentication failed. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const switchMode = () => {
        setIsLogin(!isLogin);
        setError('');
        setStatus('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-logo">
                <img src={CSPRIME} alt="CSPRIME Logo" className="logo-image" />
            </div>

            <div className="auth-container">
                <h2 className="auth-title">{isLogin ? 'Welcome Back!' : 'Create an Account'}</h2>
                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="input-container">
                        <input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} className="input-field" required />
                    </div>
                    <div className="input-container">
                        <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} className="input-field" required />
                    </div>
                    {!isLogin && (
                        <div className="input-container">
                            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} className="input-field" required />
                        </div>
                    )}
                    <button type="submit" className="submit-button" disabled={isSubmitting}>
                        {isSubmitting ? 'Please wait...' : (isLogin ? 'Login' : 'Sign Up')}
                    </button>
                </form>
                {error && <p role="alert" className="auth-error">{error}</p>}
                {status && <p role="status" className="auth-status">{status}</p>}
                <p className="auth-switch">
                    {isLogin ? (
                        <>Don't have an account? <button type="button" className="auth-link" onClick={switchMode}>Sign Up</button></>
                    ) : (
                        <>Already have an account? <button type="button" className="auth-link" onClick={switchMode}>Login</button></>
                    )}
                </p>
            </div>
        </div>
    );
};

export default AuthPage;
