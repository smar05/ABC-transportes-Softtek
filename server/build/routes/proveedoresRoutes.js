"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const proveedoresController_1 = require("../controllers/proveedoresController");
class ProveedoresRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", proveedoresController_1.proveedoresControler.list);
        this.router.get("/:id", proveedoresController_1.proveedoresControler.getOne);
        this.router.post("/", proveedoresController_1.proveedoresControler.create);
        this.router.delete("/:id", proveedoresController_1.proveedoresControler.delete);
        this.router.put("/:id", proveedoresController_1.proveedoresControler.update);
    }
}
const proveedoresRoutes = new ProveedoresRoutes();
exports.default = proveedoresRoutes.router;
