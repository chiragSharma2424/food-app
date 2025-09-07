export default function UserLogin() {
  return (
    <div className="container">
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <div className="link">
        Don’t have an account? <a href="/register">Register</a>
      </div>
    </div>
  );
}