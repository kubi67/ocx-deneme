// import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common';
// import RequestWithUser from 'src/decorators/requestWithUser.interface';
// import { Perms } from 'src/models/ownered/perms.enum';
 
// const RoleGuard = (role: Perms): Type<CanActivate> => {
//   class RoleGuardMixin implements CanActivate {
//     canActivate(context: ExecutionContext) {
//       const request = context.switchToHttp().getRequest<RequestWithUser>();
//       const user = request.user;
//        console.log(user);
//       //return user?.role.includes(role);
//       return true;
//     }
//   }
 
//   return mixin(RoleGuardMixin);
// }
 
// export default RoleGuard;