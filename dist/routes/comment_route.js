"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/commentRoutes.ts
const express_1 = require("express");
const comment_controller_1 = require("../controllers/comment_controller");
const router = (0, express_1.Router)();
router.get('/all', comment_controller_1.getAllComments);
router.post('/create', comment_controller_1.createComment);
exports.default = router;
