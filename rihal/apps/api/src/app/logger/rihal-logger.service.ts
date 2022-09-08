import { ConsoleLogger, Injectable, Scope } from '@nestjs/common';


@Injectable({ scope: Scope.TRANSIENT })
export class RihalLoggerService extends ConsoleLogger implements RihalLoggerService {
  /**
   * Write a 'log' level log.
   */
  log(message: any, ...optionalParams: any[]) {}

  customLog() {
    this.log('Please feed the cat!');
  }
  /**
   * Write an 'error' level log.
   */

  error(message: any, stack?: string, context?: string) {
    // add your tailored logic here
   // super.error(...arguments);
  }

  /**
   * Write a 'warn' level log.
   */
  warn(message: any, ...optionalParams: any[]) {}

  /**
   * Write a 'debug' level log.
   */
  // debug?(message: any, ...optionalParams: any[]) {}

  /**
   * Write a 'verbose' level log.
   */
  //verbose?(message: any, ...optionalParams: any[]) {}
}
