import { useContext } from 'react';
import { useHistory } from 'react-router-dom'

import { AuthContext } from '../contexts/AuthContext';

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/llogo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useContext(AuthContext)

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }

    history.push('/rooms/new');
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustration simbolizing questions and answers" />
        <strong>Create your live questions &amp; answers room</strong>
        <p>Answer your audicence's questions in real time</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Lamegspørre" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Google-logo" />
            Log with your Google account.
          </button>
          <div className="separator">or enter in a room</div>
          <form>
            <input
              type="text"
              placeholder="Room code"
            />
            <Button type="submit">
              Enter in a room
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}