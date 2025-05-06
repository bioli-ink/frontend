export interface GetUploadTokenReq {
  type: 'avatar' | 'wechat' | 'image';
  name?: string;
  [key: string]: string | undefined;
}

export interface GetUploadTokenRsp {
  token: string;
  key: string;
}

export interface GetVerifyCodeReq {
  mobile: string;
  [key: string]: string;
}

export interface AuthReq {
  mobile: string;
  verifyCode: string;
}

export interface LoginRsp {
  token: string;
}
