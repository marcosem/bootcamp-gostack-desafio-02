// By using the module "sucrase" you can use the syntaxe "import" instead of variable
// declaration for importing modules
import express from 'express';
import routes from './routes';
import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Make the application eligible to receibe requires in JSon format.
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

// By using the module "sucrase" you can use the syntaxe "export default" instead of module.exports
// module.exports = new App().server;
export default new App().server;
