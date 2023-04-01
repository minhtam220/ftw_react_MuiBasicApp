export function Login({ onLogin }) {
  const handleLogin = () => {
    onLogin(true);
  };

  return <button onClick={handleLogin}>Login</button>;
}
