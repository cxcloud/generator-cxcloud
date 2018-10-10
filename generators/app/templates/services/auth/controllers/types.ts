export interface IAttributesHash {
  [key: string]: string;
}

export interface ICodeDeliveryResult {
  CodeDeliveryDetails: {
    Destination: string;
    DeliveryMedium: string;
    AttributeName: string;
  };
}

export interface ILogin {
  username: string;
  password: string;
}

export interface ILoginMfa {
  username: string,
  mfaCode: string,
  loginSession: string
}

export interface ILoginSuccessResult {
  refreshToken: string;
  accessToken: string;
  accessTokenExpiresAt: number;
  idToken: string;
  idTokenExpiresAt: number;
}

export interface ILoginNextStepResult {
  nextStep: 'MFA_AUTH' | 'NEW_PASSWORD_REQUIRED';
  loginSession: string;
}

export interface ILoginNewPasswordRequired {
  username: string,
  newPassword: string,
  loginSession: string
}

export interface IPasswordChage {
  refreshToken: string,
  oldPassword: string,
  newPassword: string
}

export interface IPasswordForgot {
  username: string
}

export interface IPasswordReset {
  username: string,
  passwordResetCode: string,
  newPassword: string
}

export interface IProfileEdit {
  refreshToken: string,
  attributesHash: IAttributesHash
}

export interface IProfileEditAttributeConfirmation {
  refreshToken: string,
  attribute: string,
  confirmationCode: string
}

export interface IProfileEditPhoneNumber {
  refreshToken: string,
  phoneNumber: string
}

export interface IRefreshToken {
  refreshToken: string
}

export interface IRegister {
  username: string;
  password: string;
  attributes: IAttributesHash;
}

export interface IRegisterConfirmation {
  username: string,
  confirmationCode: string
}

export interface IRegisterResendCode {
  username: string
}

export interface IRegisterResult {
  username: string;
}
