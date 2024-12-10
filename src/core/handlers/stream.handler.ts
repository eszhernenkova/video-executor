import { ChildProcessWithoutNullStreams } from "child_process";
import { IStreamLogger } from "./stream-logger.interface";


//проксировали стрим внутри логера
export class StreamHandler {
    //внутрь передаётся внешний обработчик, который располагается в out
    constructor(private logger: IStreamLogger){}

    processOutput(stream: ChildProcessWithoutNullStreams){
        stream.stdout.on('data', (data: any) => {
            this.logger.log(data.toString());
        });

        stream.stdout.on('data', (data: any) => {
            this.logger.error(data.toString());
        });

        stream.stdout.on('close', () => {
            this.logger.end();
        });
    }
}