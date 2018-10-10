import { Path, POST, PUT } from 'typescript-rest';
import { Tags } from 'typescript-rest-swagger';
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
import {
  ICodeDeliveryResult,
  ILogin,
  ILoginMfa,
  ILoginNextStepResult,
  ILoginNewPasswordRequired,
  ILoginSuccessResult,
  IPasswordChage,
  IPasswordForgot,
  IPasswordReset,
  IProfileEdit,
  IProfileEditAttributeConfirmation,
  IProfileEditPhoneNumber,
  IRefreshToken,
  IRegister,
  IRegisterConfirmation,
  IRegisterResendCode,
  IRegisterResult
} from './types';
import { IAttributesHash } from './types';

@Path('/auth')
export class AuthController {
  @Path('/login')
  @Tags('auth')
  @POST
  loginFn(body: ILogin): Promise<ILoginSuccessResult | ILoginNextStepResult> {
    return login(body.username, body.password);
  }

  @Path('/loginMfa')
  @Tags('auth')
  @POST
  loginMfaFn(body: ILoginMfa): Promise<ILoginSuccessResult> {
    return loginMfa(body.username, body.mfaCode, body.loginSession);
  }

  @Path('/loginNewPasswordRequired')
  @Tags('auth')
  @POST
  loginNewPasswordRequiredFn(body: ILoginNewPasswordRequired): Promise<ILoginSuccessResult> {
    return loginNewPasswordRequired(body.username, body.newPassword, body.loginSession);
  }

  @Path('/logout')
  @Tags('auth')
  @POST
  logoutFn(body: IRefreshToken): Promise<string> {
    return logout(body.refreshToken);
  }

  @Path('/passwordForgot')
  @Tags('auth')
  @POST
  passwordForgotFn(body: IPasswordForgot): Promise<ICodeDeliveryResult> {
    return passwordForgot(body.username);
  }

  @Path('/passwordReset')
  @Tags('auth')
  @POST
  passwordResetFn(body: IPasswordReset): Promise<string> {
    return passwordReset(body.username, body.passwordResetCode, body.newPassword);
  }

  @Path('/passwordChange')
  @Tags('auth')
  @POST
  passwordChangeFn(body: IPasswordChage): Promise<string> {
    return passwordChange(body.refreshToken, body.oldPassword, body.newPassword);
  }

  @Path('/profile')
  @Tags('profile')
  @POST
  profileFn(body: IRefreshToken): Promise<IAttributesHash> {
    return profile(body.refreshToken);
  }

  @Path('/profileEdit')
  @Tags('profile')
  @PUT
  profileEditFn(body: IProfileEdit): Promise<string> {
    return profileEdit(body.refreshToken, body.attributesHash);
  }

  @Path('/profileEditPhoneNumber')
  @Tags('profile')
  @PUT
  profileEditPhoneNumberFn(body: IProfileEditPhoneNumber): Promise<string> {
    return profileEditPhoneNumber(body.refreshToken, body.phoneNumber);
  }

  @Path('/profileEditAttributeConfirmation')
  @Tags('profile')
  @POST
  profileEditAttributeConfirmationFn(body: IProfileEditAttributeConfirmation): Promise<string> {
    return profileEditAttributeConfirmation(body.refreshToken, body.attribute, body.confirmationCode);
  }

  @Path('/refreshSession')
  @Tags('auth')
  @POST
  refreshSessionFn(body: IRefreshToken): Promise<ILoginSuccessResult> {
    return refreshSession(body.refreshToken);
  }

  @Path('/register')
  @Tags('auth')
  @POST
  registerFn(body: IRegister): Promise<IRegisterResult> {
    return register(body.username, body.password, body.attributes);
  }

  @Path('/registerConfirmation')
  @Tags('auth')
  @POST
  registerConfirmationFn(body: IRegisterConfirmation): Promise<string> {
    return registerConfirmation(body.username, body.confirmationCode);
  }

  @Path('/registerResendCode')
  @Tags('auth')
  @POST
  registerResendCodeFn(body: IRegisterResendCode): Promise<ICodeDeliveryResult> {
    return registerResendCode(body.username);
  }
}
