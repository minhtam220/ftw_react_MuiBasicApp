export function Logout({ onLogout }) {
  const handleLogout = () => {
    onLogout(false);
  };

  return <button onClick={handleLogout}>Logout</button>;
}
