export const environment = {
  production: true,
  base: {
    apiUrl: 'http://localhost:8000/api/',
    socket: 'ws://localhost:3000/',
  },
  storage: ['auth.token', 'auth.user', 'personnage.personnage']
};
