import { type FormEvent, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation() as { state?: { from?: string } };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [twoFactorCode, setTwoFactorCode] = useState('');
  const [twoFactorToken, setTwoFactorToken] = useState<string | undefined>();
  const [error, setError] = useState('');

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      setError('');
      const result = await login({ email, password, twoFactorCode, twoFactorToken });
      if (result.requiresTwoFactor) {
        setTwoFactorToken(result.twoFactorToken);
        return;
      }
      navigate(location.state?.from || '/');
    } catch (err) {
      setError('Login failed. Check credentials and 2FA code.');
    }
  };

  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12, maxWidth: 360 }}>
        <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {twoFactorToken && (
          <input
            placeholder="2FA Code"
            value={twoFactorCode}
            onChange={(e) => setTwoFactorCode(e.target.value)}
            required
          />
        )}
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
      <GoogleLoginButton />
      <p>
        No account? <Link to="/register">Register</Link>
      </p>
    </main>
  );
}

function GoogleLoginButton() {
  const { loginWithGoogleToken } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const { getAuth, GoogleAuthProvider, signInWithPopup } = await import('firebase/auth');
    const { initializeApp, getApps } = await import('firebase/app');

    if (!getApps().length) {
      initializeApp({
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        appId: import.meta.env.VITE_FIREBASE_APP_ID,
      });
    }

    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const credential = await signInWithPopup(auth, provider);
    const idToken = await credential.user.getIdToken();
    await loginWithGoogleToken(idToken);
    navigate('/');
  };

  return <button onClick={handleGoogleLogin}>Continue with Google</button>;
}
