import { Router } from "express";
import { indexControler } from "../controllers/indexController";

class IndexRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {}
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;
