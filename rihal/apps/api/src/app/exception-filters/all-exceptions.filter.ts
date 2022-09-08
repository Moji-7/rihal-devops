
import { Catch, ArgumentsHost, Inject, HttpServer, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter, HttpAdapterHost } from '@nestjs/core';
import { RihalLoggerService } from '../logger';



@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  constructor(
    @Inject(HttpAdapterHost) applicationRef: HttpServer,
    private logger: RihalLoggerService
  ) {
    super(applicationRef);
  }

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    // const request = ctx.getRequest();
    // const status = exception.getStatus();

    this.logger.error(exception);

    let status = HttpStatus.INTERNAL_SERVER_ERROR;

    const message = (exception instanceof Error) ? exception.message : exception.message.error;

    if (exception.status === HttpStatus.NOT_FOUND) {
      status = HttpStatus.NOT_FOUND;
    }

    if (exception.status === HttpStatus.SERVICE_UNAVAILABLE) {
      status = HttpStatus.SERVICE_UNAVAILABLE;
    }

    if (exception.status === HttpStatus.NOT_ACCEPTABLE) {
      status = HttpStatus.NOT_ACCEPTABLE;
    }

    if (exception.status === HttpStatus.EXPECTATION_FAILED) {
      status = HttpStatus.EXPECTATION_FAILED;
    }

    if (exception.status === HttpStatus.BAD_REQUEST) {
      status = HttpStatus.BAD_REQUEST;
    }

    response
      .status(status)
      .json({
        status,
        success: false,
        data: [],
        error: message,
        message: (status === HttpStatus.INTERNAL_SERVER_ERROR) ? 'Sorry we are experiencing technical problems.' : '',
      });
  }
}
