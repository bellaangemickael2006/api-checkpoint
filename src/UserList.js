import { useEffect, useState } from 'react';
import axios from 'axios';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

function UserList() {
  // Liste des utilisateurs récupérés depuis l'API
  const [listOfUser, setListOfUser] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let ignore = false;

    axios
      .get(USERS_URL)
      .then((response) => {
        if (ignore) return;
        setListOfUser(response.data);
        setStatus('success');
      })
      .catch(() => {
        if (ignore) return;
        setStatus('error');
      });

    // Évite de mettre à jour l'état si le composant est démonté entre-temps
    return () => {
      ignore = true;
    };
  }, []);

  if (status === 'loading') {
    return <p className="status">Chargement des utilisateurs...</p>;
  }

  if (status === 'error') {
    return <p className="status error">Impossible de charger la liste des utilisateurs.</p>;
  }

  return (
    <ul className="user-list">
      {listOfUser.map((user) => (
        <li key={user.id} className="user-card">
          <h2>{user.name}</h2>
          <p>@{user.username}</p>
          <p>{user.email}</p>
          <p>{user.company.name}</p>
          <p>{user.address.city}</p>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
