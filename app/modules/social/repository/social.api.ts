import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { API, Config } from '@/repository'
import { CommentInterface } from './social.types'
/**
 * SocialAPI class contains http requests for the auth module.
 */
class SocialAPI extends API {
  /**
   * @param   {AxiosRequestConfig}  config
   *
   * @return
   */
  public constructor(config: AxiosRequestConfig) {
    super(config)
  }

  /**
   * Get all comments.
   *
   * @return  {Promise<CommentInterface[]>}
   */
  public async getComments(): Promise<CommentInterface[]> {
    return await this.get<CommentInterface[]>('/comments')
      .then((response: AxiosResponse<CommentInterface[]>) => {
        const { data } = response

        const comments: CommentInterface[] = data

        return comments
      })
      .catch((error: AxiosError) => {
        throw error
      })
  }

  /**
   * Get comments by post ID.
   *
   * @param   {number}                       postID
   * @return  {Promise<CommentInterface[]>}
   */
  public async getCommentsByPostID(
    postID: number
  ): Promise<CommentInterface[]> {
    return await this.get<CommentInterface[]>('/comments', {
      params: {
        postId: postID,
      },
    })
      .then((response: AxiosResponse<CommentInterface[]>) => {
        const { data } = response

        const comments: CommentInterface[] = data

        return comments
      })
      .catch((error: AxiosError) => {
        throw error
      })
  }
}

export const SocialRepository = new SocialAPI(Config)
