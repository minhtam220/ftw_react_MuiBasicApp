export function Login({ onLogin }) {
  const handleLogin = () => {
    onLogin(true);
  };

  return <button onClick={handleLogin}>Login</button>;
}

export function Logout({ onLogout }) {
  const handleLogout = () => {
    onLogout(false);
  };

  return <button onClick={handleLogout}>Logout</button>;
}
