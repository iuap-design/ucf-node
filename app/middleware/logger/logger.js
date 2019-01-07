const log4js = require('log4js');
const loggerConfig = require('./logger-configure.js')

module.exports = ( options ) => {
  return async (ctx, next) => {
    const start = Date.now()
    log4js.configure({
      /**
       * 指定要记录的日志分类 cheese
       * 展示方式为文件类型 file
       * 日志输出的文件名 cheese.log
       */
      appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
    
      /**
       * 指定日志的默认配置项
       * 如果 log4js.getLogger 中没有指定，默认为 cheese 日志的配置项
       * 指定 cheese 日志的记录内容为 error 及 error 以上级别的信息
       */
      categories: { default: { appenders: ['cheese'], level: 'error' } }
    }); 
    const logger = log4js.getLogger('cheese');
    await next()
    const end = Date.now()
    const responseTime = end - start;
    logger.info(`响应时间为${responseTime/1000}s`);
  }
}