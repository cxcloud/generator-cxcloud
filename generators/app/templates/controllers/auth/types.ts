export type Status = 'SUCCESS';

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

export interface ICognitoAttribute {
  Name: string;
  Value: string;
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

export interface IRefreshSession {
  refreshToken: string
}

export interface IRegister {
  username: string;
  password: string;
  attributes: IAttributesHash;
}

export interface IRegisterResult {
  username: string;
}
