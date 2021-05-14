import "./Profile.css";

export default function Profile({ user }) {
  return (
    <div className="Profile">
      <h1>My profile</h1>
      <div className="data">
        <p>Name: {user.fullName}</p>
        <p>Emails:</p>
        <ul>
          {user.emails.map((email) => (
            <li key={email.value}>{email.value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
