export interface CommentInterface {
  readonly postId: number
  readonly id: number
  readonly email: string
  readonly body?: string
}

export interface PostStateInterface {
  title: string
  body: string
  userId: number
}
