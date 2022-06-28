// 接口
export interface User {
  readonly username: string,
  userage: number,
  a?: any,
  [propName: string]: any
}

 