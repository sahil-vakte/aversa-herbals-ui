import React, { useState } from 'react';
import axios from 'axios';

const AadharKyc = () => {
    const [aadharNumber, setAadharNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [verificationStatus, setVerificationStatus] = useState('');
    const [shareCode, setShareCode] = useState('');

    const sendOtp = async () => {
        try {
            const response = await axios.post('http://localhost:3001/api/send-otp', { aadharNumber });
            setOtpSent(true);
            setTransactionId(response.data.transactionId || '');  
            alert('OTP sent successfully!');
        } catch (error) {
            console.error('Error sending OTP:', error);
            alert('Failed to send OTP.');
        }
    };

    const verifyOtp = async () => {
        try {
            const response = await axios.post('http://localhost:3001/api/verify-otp', {
                otp,
                transactionId,
                shareCode,
            });
            setVerificationStatus(response.data.message || 'OTP Verified Successfully');
        } catch (error) {
            console.error('Error verifying OTP:', error);
            alert('Failed to verify OTP.');
        }
    };

    return (
        <div className="App">
            <h1>Aadhar Card Verification</h1>
            <div>
                <label>Aadhar Number:</label>
                <input
                    type="text"
                    value={aadharNumber}
                    onChange={(e) => setAadharNumber(e.target.value)}
                />
                <button onClick={sendOtp}>Send OTP</button>
            </div>
            {otpSent && (
                <div>
                    <label>OTP:</label>
                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <label>Share Code:</label>
                    <input
                        type="text"
                        value={shareCode}
                        onChange={(e) => setShareCode(e.target.value)}
                    />
                    <button onClick={verifyOtp}>Verify OTP</button>
                </div>
            )}
            {verificationStatus && <p>{verificationStatus}</p>}
        </div>
    );
};

export default AadharKyc;
