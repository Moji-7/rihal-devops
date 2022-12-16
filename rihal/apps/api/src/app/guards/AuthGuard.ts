import { CanActivate, ExecutionContext, Inject, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { timeout } from 'rxjs/operators';

export class AuthGuard implements CanActivate {
  constructor(
    @Inject('AUTH_CLIENT')
    private readonly client: ClientProxy
  ) {}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    Logger.log('Auth Guard');
    const req = context.switchToHttp().getRequest();

    try{
     // Logger.log("in api backend we ask auth for this "+req.headers['authorization']?.split(' ')[1].slice(0, -1))
      const res = await this.client.send(
        { role: 'auth', cmd: 'check' },
        { jwt: req.headers['authorization']?.split(' ')[1].replace(/"\s*$/, "")})
        .pipe(timeout(5000))
        .toPromise();

        return res;
    } catch(err) {
      Logger.error(err);
      return false;
    }
  }
}
