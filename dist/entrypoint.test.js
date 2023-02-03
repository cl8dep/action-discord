"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = __importDefault(require("process"));
const child_process_1 = __importDefault(require("child_process"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
test('test runs', () => {
    const ip = path_1.default.join(__dirname, '..', 'dist', 'entrypoint.js');
    const result = child_process_1.default.execSync(`node ${ip}`, { env: process_1.default.env }).toString();
    console.log(result);
});
//# sourceMappingURL=entrypoint.test.js.map