import { useHistory } from 'react-router-dom'

import { auth, firebase } from '../services/firebase'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/llogo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function Home() {
  const history = useHistory();

  function handleCreateRoom() {
    history.push('/rooms/new');
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Illustrasjon som symboliserer spørsmål og svar" />
        <strong>Lag live spørsmål &amp; svar-rom</strong>
        <p>Still spørsmål til publikum i sanntid.</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Lamegspørre" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Google-logo" />
            Lag din plass med Google.
          </button>
          <div className="separator">eller gå inn i et rom</div>
          <form>
            <input
              type="text"
              placeholder="Angi romkoden"
            />
            <Button type="submit">
              Gå inn i rommet
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}