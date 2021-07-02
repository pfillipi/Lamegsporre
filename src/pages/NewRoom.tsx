import { Link } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/llogo.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function NewRoom() {
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
              placeholder="Angi romkoden"
            />
            <Button type="submit">
              Enter in the room.
            </Button>
          </form>
          <p>
            Vil du bli med i et eksisterende rom? <Link to="/">Klikk her</Link>
          </p>
        </div>
      </main>
    </div>
  )
}