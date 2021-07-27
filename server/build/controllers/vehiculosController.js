"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehiculosController = void 0;
const database_1 = __importDefault(require("../routes/database"));
class VehiculosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("SELECT * FROM provedor", (err, result, fields) => {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("SELECT * FROM provedor WHERE id = ?", [id], (err, result, fields) => {
                if (result.length > 0) {
                    return res.json(result[0]);
                }
                res.status(404).json({ text: "No se encontro el proveedor" });
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("INSERT INTO provedor set ?", [req.body]);
            res.json({ message: "Proveedor guardado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("DELETE FROM provedor WHERE id = ?", [id], (err, result, fields) => {
                if (err) {
                    throw err;
                }
                res.json({ message: "Proveedor eliminado" });
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("UPDATE provedor SET ? WHERE id = ?", [req.body, id], (err, result, fields) => {
                if (err) {
                    throw err;
                }
                res.json({ message: "El proveedor fue actualizado" });
            });
        });
    }
}
exports.vehiculosController = new VehiculosController();
