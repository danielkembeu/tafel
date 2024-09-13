"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/resourceRoutes.ts
const express_1 = require("express");
const resources_controller_1 = require("../controllers/resources_controller");
const router = (0, express_1.Router)();
router.get('/all', resources_controller_1.getAllResources);
router.post('/create', resources_controller_1.createResource);
exports.default = router;
