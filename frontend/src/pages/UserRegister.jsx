export default function UserRegister() {
  return (
    <div className="container">
      <h1>Create Account</h1>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <div className="link">
        Already have an account? <a href="/login">Login</a>
      </div>
    </div>
  );
}
