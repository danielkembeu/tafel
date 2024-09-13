"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/courseRoutes.ts
const express_1 = require("express");
const courses_controller_1 = require("../controllers/courses_controller");
const router = (0, express_1.Router)();
router.get('/all', courses_controller_1.getAllCourses);
router.post('/create', courses_controller_1.createCourse);
exports.default = router;
