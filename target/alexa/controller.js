"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const controller_1 = require("../myparcel/controller");
let AlexaController = class AlexaController {
    allLabels(date) {
        return controller_1.printLabels(date)
            .then(resp => resp);
    }
    getCountLabelsByDate(date) {
        return controller_1.countLabels(date)
            .then(resp => resp);
    }
};
__decorate([
    routing_controllers_1.Get('/labels/print/:date'),
    routing_controllers_1.HttpCode(200),
    __param(0, routing_controllers_1.Param('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AlexaController.prototype, "allLabels", null);
__decorate([
    routing_controllers_1.Get('/labels/count/:date'),
    routing_controllers_1.HttpCode(200),
    __param(0, routing_controllers_1.Param('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AlexaController.prototype, "getCountLabelsByDate", null);
AlexaController = __decorate([
    routing_controllers_1.JsonController()
], AlexaController);
exports.default = AlexaController;
//# sourceMappingURL=controller.js.map