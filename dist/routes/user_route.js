"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/userRoutes.ts
const express_1 = require("express");
const user_controller_1 = require("../controllers/user_controller");
const router = (0, express_1.Router)();
router.get('/all', user_controller_1.getAllUsers);
router.get('/user/:id', user_controller_1.getUserById);
router.post('/create', user_controller_1.createUser);
exports.default = router;
