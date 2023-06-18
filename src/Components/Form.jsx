import React, { useState } from 'react';
import '../style/components/form.scss';
import envelopeImg from '../assets/email.svg';
import axios from 'axios';

import successImg from '../assets/success.svg';

export default function Form() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    function isValidEmail(email) {
        const regExp =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const isValid = regExp.test(String(email).toLocaleLowerCase());
        return isValid;
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!isValidEmail(email)) {
            setError('Please enter a valid email.');
            setTimeout(() => setError(null), 2000);
            return;
        }
        setError(null);
        setMessage(null);

        axios
            .put(
                'https://api.jsonbin.io/v3/b/648f10378e4aa6225eb05d30',
                { email },
                {
                    headers: {
                        'X-Master-Key':
                            '$2b$10$.tCN23k0zW6mKYxltPyA9.5lDGYZG5285UZ6cyUZHjoBDx0JpGPjC',
                    },
                }
            )
            .then(() => {
                setMessage('Your email is confirmed!');
                setTimeout(() => setMessage(null), 2000);
            })
            .catch(() => {
                setError('Failed to save email.');
                setTimeout(() => setError(null), 2000);
            });
    }

    return (
        <div className="box-form">
            <h1>REFER FRIENDS AND GET REWARDS</h1>
            <p>
                Refer your friends to us and earn hotel booking vouchers. We'll
                give you 1 coin for each friend that installs our extension.
                Minimum cash-out at 20 coins.
            </p>
            <div className="messages">
                {error && (
                    <div className="error">
                        <span>{error}</span>
                    </div>
                )}
                {message && (
                    <div className="success">
                        <img src={successImg} alt="Success" />
                        <span>{message}</span>
                    </div>
                )}
            </div>
            <form onSubmit={handleSubmit}>
                <div className="cell-1">
                    <label htmlFor="email"></label>
                    <img
                        className="envelope-img"
                        src={envelopeImg}
                        alt="envelope"
                    />
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="cell-1">
                    <button
                        className="form-btn"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Get referral link
                    </button>
                </div>
                <span>Limits on max rewards apply.</span>
            </form>
        </div>
    );
}
