import { promises } from "fs";
import { dirname, isAbsolute, join } from "path";

export class FileService {
    private async isExist(path: string) {
        try{
            await promises.stat(path);
            return true;
        } catch{
            return false;
        }
    }

    public getFilePath(path: string, name: string, ext: string): string {
        if(!isAbsolute(path)){
            path = join(__dirname + '/' + path);
        }
        return join(dirname(path) + '/' + name + '.' + ext);
    }

    async deleteFileIfExists(path: string){
        if(await this.isExist(path)){
            promises.unlink(path);
        }
    }
}

//dirname(path) - ф-я получения директории по пути
//__dirname текущая рабочая директория

//fs = files system module, который работает с файловой системой в ноде
//promises.stat(path) -  stat возвращает статистику файла, либо reject, если такого файла нет
//promises.unlink(path); - удаление файла по пути