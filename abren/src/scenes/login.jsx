import React, { useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  const fontFamilyStyle = {
    fontFamily: 'Dancing Script, cursive'
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const handleRememberMeChange = (e) => {
    const newValue = e.target.checked;
    setRememberMe(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({});

    // Basic validation
    if (!email) {
      setErrors({ email: 'Please enter your email' });
      return;
    }

    if (!password) {
      setErrors({ password: 'Please enter your password' });
      return;
    }

    // Simulating login process
    if (email === 'example@example.com' && password === 'password123') {
      // Successful login
      alert('Login successful!');

      // Remember Me feature
      if (rememberMe) {
        // Save login credentials in localStorage or cookies
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
      } else {
        // Clear saved login credentials
        localStorage.removeItem('email');
        localStorage.removeItem('password');
      }
    } else {
      // Failed login
      setErrors({ login: 'Invalid email or password' });
    }
  };

  // Retrieve saved login credentials on component mount
  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  return (
    <div style={{ backgroundColor: '#6791AF', height: '100vh', paddingTop: '20px' }}>
      <div
        className="container-sm shadow rounded"
        style={{
          backgroundColor: '#ffffff',
          width: '450px',
          position: 'relative',
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          padding: '20px',
          justifyContent: 'center',
        }}
      >
        <div className="col">
          <form onSubmit={handleSubmit}>
          <h2 style={fontFamilyStyle}>Abren</h2>
            <h2>Log In</h2>
            <div className="mb-1">
              <label htmlFor="email" className="form-label"></label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                placeholder="Email"
                style={{ borderColor: '#6791AF' }}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label"></label>
              <div className="input-group">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  placeholder="Password"
                  style={{ borderColor: '#6791AF' }}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                </button>
              </div>
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>
            <div className="mb-3  form-check" style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <label className="form-check-label px-2" htmlFor="rememberMe">
                Remember Me
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                backgroundColor: '#213D52',
                width: '200px',
                paddingBottom: '5px',
                marginBottom: '5px',
              }}
            >
              Log In
            </button>
          </form>
          <div style={{ marginTop: '10px', textAlign: 'center' }}>
            <p>
              {/* <a href="/forgot-password" style={{ color: '#213D52' }}>Forgot Password</a> */}
            </p>
            <p>
              Don't have an account?{' '}
              <a href="/form" style={{ color: '#213D52' }}>Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;