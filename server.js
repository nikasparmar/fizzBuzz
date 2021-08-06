import cluster from 'cluster';
import numCPUs from 'os';
import app from './app.js';

if (cluster.isMaster) {
  // Fork workers.
  for (let i = 0; i < numCPUs.cpus().length; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    cluster.fork(); // Create a New Worker, If Worker is Dead
  });
}
else {
  app.listen(process.env.PORT || 3000, () => console.log('server starting'));
}
