export class log4jsConfig{

    static Log():any{
        const log4js = require('log4js');
        log4js.configure('./ConfigLog/log4js.json');
        let log=log4js.getLogger('file');
        return log;
    }
}