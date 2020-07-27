import request from '../utils/request'
import Api from '../config/api';

// 微信登陆
export async function loginByWeixin(payload) {
  return request.post(Api.AuthLoginByWeixin, payload)
}