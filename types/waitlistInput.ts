/**
 * @prop email: string
 * @prop nickname: string
 */

interface waitListInput {
  email: string
  nickname?: string
}

interface IUnsubscribe {
  name: string
  email: string
  type: string
  token?: string
}
