# API Checkpoint - Liste des utilisateurs

Application React (create-react-app) qui consomme l'API publique [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) avec **axios**.

## Fonctionnement

- `src/UserList.js` : appelle `https://jsonplaceholder.typicode.com/users` avec axios dans un `useEffect`.
- Les données sont stockées dans l'état `listOfUser` avec `useState`.
- `listOfUser.map(...)` affiche chaque utilisateur sous forme de carte (nom, pseudo, e-mail, entreprise, ville).
- Un message de chargement et un message d'erreur sont affichés selon l'état de la requête.

## Lancer le projet

```bash
npm install
npm start
```
