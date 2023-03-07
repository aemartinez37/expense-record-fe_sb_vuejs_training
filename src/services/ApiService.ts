import http from '@/http-common'
import type { IUser } from '@/types'

class ApiService {
  getUser(userName: string): Promise<IUser> {
    return http.get(`/users/${userName}`)
  }

  createUser(user: any): Promise<{ message: string; user: IUser }> {
    return http.post('/users', user)
  }
}

export default new ApiService()
