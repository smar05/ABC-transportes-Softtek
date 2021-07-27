"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vehiculosController_1 = require("../controllers/vehiculosController");
class VehiculosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", vehiculosController_1.vehiculosController.list);
        this.router.get("/:id", vehiculosController_1.vehiculosController.getOne);
        this.router.post("/", vehiculosController_1.vehiculosController.create);
        this.router.delete("/:id", vehiculosController_1.vehiculosController.delete);
        this.router.put("/:id", vehiculosController_1.vehiculosController.update);
    }
}
const vehiculosRoutes = new VehiculosRoutes();
exports.default = vehiculosRoutes.router;
