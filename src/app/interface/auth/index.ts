import { AuthReq, GetUploadTokenReq, GetUploadTokenRsp, GetVerifyCodeReq, LoginRsp } from '@/app/types/api/auth';
import http from '@/app/utils/http';
import { queryStringify } from '@/app/utils/transform';

const SERVER_DOMAIN = process.env.NEXT_PUBLIC_SERVER_DOMAIN;

export const getUploadToken = (props: GetUploadTokenReq) => {
  return http.get<GetUploadTokenReq, GetUploadTokenRsp>(`${SERVER_DOMAIN}/auth/upload-token?${queryStringify(props)}`);
};

export const getVerifyCode = (props: GetVerifyCodeReq) => {
  return http.get<GetVerifyCodeReq, null>(`${SERVER_DOMAIN}/auth/verify-code?${queryStringify(props)}`);
};

export const requestLogin = (props: AuthReq) => {
  return http.post<AuthReq, LoginRsp>(`${SERVER_DOMAIN}/auth/login`, props);
}

export const getLoginStatus = () => {
  return http.get(`${SERVER_DOMAIN}/auth/login-status`);
};
