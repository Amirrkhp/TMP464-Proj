// app/routes/index.jsx
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <div>
      <h1>Welcome to the Smart Gift Assistant</h1>
      <Link to="/gift-assistant">Start Gift Assistant</Link>  {/* Link to the new route */}
    </div>
  );
}
