import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3001/', { name, email, password })
        .then(result => {
            console.log(result);
            navigate('/login');
        })
        .catch(err => console.log(err.response ? err.response.data : err));
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100" 
        style={{ backgroundColor: '#f7f9fc',
            backgroundImage: `url('https://img.freepik.com/premium-photo/modern-abstract-background-featuring-white-blue-orange-hues-with-geometric-shapes_1137529-104683.jpg?w=740')`, // URL to your image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
         }
        }>
            <div className="card p-4 shadow-lg rounded" style={{ width: '400px', backgroundColor: '#F1F1F1', borderRadius: '10px' }}>
                <h2 className="text-center">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nameInput" className="form-label">Enter Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="nameInput" 
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
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
                    <button type="submit" className="btn btn-primary w-100">Register</button>
                </form>
                <p className="mt-3 text-center">
                    Already have an account? 
                    <Link to="/login" className="btn btn-link">Login</Link>
                </p>
            </div>
        </div>
    );
}
