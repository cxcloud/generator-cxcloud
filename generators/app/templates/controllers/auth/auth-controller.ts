import { POST, Path, Context, ServiceContext } from 'typescript-rest';
import { Tags, Security } from 'typescript-rest-swagger';
import {
  login,
  loginMfa,
  loginNewPasswordRequired,
  logout,
  passwordChange,
  passwordForgot,
  passwordReset,
  profile,
  profileEdit, //put
  profileEditAttributeConfirmation,
  profileEditPhoneNumber, //put
  refreshSession,
  register,
  registerConfirmation,
  registerResendCode
} from '@cxcloud/auth';

import {
  IAttributesHash,
  ICodeDeliveryResult,
  ICognitoAttribute,
  ILogin,
  ILoginMfa,
  ILoginNextStepResult,
  ILoginSuccessResult,
  IRefreshSession,
  IRegister,
  IRegisterResult,
  Status
} from './types';

@Path('/auth')
export class AuthController {
  @Context ctx!: ServiceContext;

  @Path('/login')
  @Tags('auth')
  @POST
  loginUser(body: ILogin): Promise<ILoginSuccessResult | ILoginNextStepResult> {
    const { username, password } = body;
    return login(
      username,
      password
    );
  }

  // @Path('/logout')
  // @Tags('auth')
  // @POST
  // logoutUser(refreshToken: string): Promise<Status> {
  //   return logout(
  //     refreshToken
  //   );
  // }

  @Path('/refreshSession')
  @Tags('auth')
  @POST
  refreshUserSession(refreshSessionBody: IRefreshSession): Promise<ILoginSuccessResult> {
    return refreshSession(
      refreshSessionBody.refreshToken
    );
  }

  @Path('/register')
  @Tags('auth')
  @POST
  registerUser(body: IRegister): Promise<IRegisterResult> {
    const { username, password, attributes = {} } = body;
    return register(
      username,
      password,
      attributes
    );
  }
}
