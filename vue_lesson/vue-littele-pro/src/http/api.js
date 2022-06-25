// 统一管理接口
import http from './http'

// 获取文章列表
export const getTopics = ({ params }) => http({
  method: 'get',
  params,
  url: '/topics'
})

// 获取文章详情
export const getTopic = ({id}) => http({
  url: '/topic/'+ id,
  method: 'get'
})

// 验证 accesstoken 其实就是登陆
export const login = (data) => http({
  url: '/accesstoken',
  method: 'post',
  data
})
