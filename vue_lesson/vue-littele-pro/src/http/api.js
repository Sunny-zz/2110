// 统一管理接口
import http from './http'

// 获取文章列表
export const getTopics = ({ params }) => http({
  method: 'get',
  params,
  url: '/topics'
})