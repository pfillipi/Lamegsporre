// import { useContext } from 'react';
import { Link } from 'react-router-dom'
// import { AuthContext } from '../contexts/AuthContext';

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/llogo.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function NewRoom() {
  // const { user } = useContext(AuthContext);

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustration that mean questions and answers" />
        <strong>Create live questions &amp; answer rooms</strong>
        <p>Answer your audience in real time.</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Lamegspørre" />
          <h2>Create a new room</h2>
          <form>
            <input
              type="text"
              placeholder="Type the room's code"
            />
            <Button type="submit">
              Enter in the room.
            </Button>
          </form>
          <p>
            Do you want to join an existing room? <Link to="/">Click here</Link>
          </p>
        </div>
      </main>
    </div>
  )
}