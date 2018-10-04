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
  profileEdit,
  profileEditAttributeConfirmation,
  profileEditPhoneNumber,
  refreshSession,
  register,
  registerConfirmation,
  registerResendCode
} from '@cxcloud/auth';

export interface ILogin {
  username: string;
  password: string;
}

@Path('/auth')
export class AuthController {
  @Context ctx!: ServiceContext;

  @Path('/login')
  @Tags('auth')
  @POST
  loginUser(body: ILogin): Promise<LoginSuccessResult | LoginNextStepResult> {
    const { username, password } = body;
    return login(
      username,
      password
    );
  }
}
