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
exports.createResource = exports.getAllResources = void 0;
const db_1 = __importDefault(require("../src/db"));
const getAllResources = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resources = yield db_1.default.resource.findMany();
        res.json(resources);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch resources' });
    }
});
exports.getAllResources = getAllResources;
const createResource = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, type, fileUrl, userId, courseId } = req.body;
    try {
        const resource = yield db_1.default.resource.create({
            data: {
                title,
                description,
                type,
                fileUrl,
                user: { connect: { id: userId } },
                course: { connect: { id: courseId } },
            },
        });
        res.status(201).json(resource);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create resource' });
    }
});
exports.createResource = createResource;
