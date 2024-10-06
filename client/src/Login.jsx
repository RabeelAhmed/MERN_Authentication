import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
        .then(result => {
            console.log(result.data);
            if (result.data.status === "Success") { 
                navigate('/home', {state: {username: result.data.username}}); // Navigate to home on successful login
            } else {
                alert(result.data.message); // Show alert for error messages
            }
        })
        .catch(err => console.log(err.response ? err.response.data : err));
    };
    

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center vh-100"  style={{ backgroundColor: '#f7f9fc',
            backgroundImage: `url('https://img.freepik.com/premium-photo/eyecatching-blue-yellow-banner-featuring-modern-abstract-design-perfect_1137529-89611.jpg?w=740')`, // URL to your image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
         }
        }>
                <div className="card p-4" style={{ width: '400px', backgroundColor: '#F1F1F1', borderRadius: '10px' }}>
                    <h2 className="text-center">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="emailInput" className="form-label">Enter Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="emailInput" 
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="passwordInput" className="form-label">Enter Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="passwordInput"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                    <p className="mt-3 text-center">
                        Dont have an account?
                        <Link to="/" className='btn btn-link'> SignUp</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
