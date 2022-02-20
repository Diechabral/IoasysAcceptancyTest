import '../assets/css/input.css'

export function Login() {
  return (
    <div>
      <div className="input-group">
        <input type="email" />

        <label htmlFor="email">
          Email
        </label>
      </div>

      <div className="input-group">
        <input type="password" />

        <label htmlFor="password">
          Password
        </label>
      </div>
    </div>
  );
}
