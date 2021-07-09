import { FormEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'

import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { User } from '../contexts/AuthContext';

import '../styles/auth.scss';

export function Home() {
  const history = useHistory();
  const { user, setUser, getValidUser } = useAuth();
  const [validUsers, setValidUsers] = useState<User[]>([]);
  useEffect(() => { loadValidUser() }, [])

  getValidUser().then(console.log)

  async function handleJoinChat(event: FormEvent) {
    event.preventDefault();
    history.push('/rooms/new')
  }

  async function loadValidUser() {
    const userData = await getValidUser()
    setValidUsers(userData)
  }

  return (
    <div id="page-auth">
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Lamegspørre" />
          <h2>Who are you?</h2>
          <form onSubmit={handleJoinChat}>
            {
              validUsers && validUsers.map(user => (
                <Button onClick={() => setUser(user)} className="button outlined" key={user.id} type="submit">
                  {user.name}
                </Button>
              ))
            }
          </form>
        </div>
      </main>
    </div>
  )
}