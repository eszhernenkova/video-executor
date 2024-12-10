"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamHandler = void 0;
//проксировали стрим внутри логера
class StreamHandler {
    //внутрь передаётся внешний обработчик, который располагается в out
    constructor(logger) {
        this.logger = logger;
    }
    processOutput(stream) {
        stream.stdout.on('data', (data) => {
            this.logger.log(data.toString());
        });
        stream.stdout.on('data', (data) => {
            this.logger.error(data.toString());
        });
        stream.stdout.on('close', () => {
            this.logger.end();
        });
    }
}
exports.StreamHandler = StreamHandler;
