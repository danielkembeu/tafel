"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const user_route_1 = __importDefault(require("../routes/user_route"));
const courses_route_1 = __importDefault(require("../routes/courses_route"));
const resources_route_1 = __importDefault(require("../routes/resources_route"));
const comment_route_1 = __importDefault(require("../routes/comment_route"));
const app = (0, express_1.default)();
const port = 4200;
app.use(express_1.default.json());
// Register routes
app.use('/api/users', user_route_1.default);
app.use('/api/courses', courses_route_1.default);
app.use('/api/resources', resources_route_1.default);
app.use('/api/comments', comment_route_1.default);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
