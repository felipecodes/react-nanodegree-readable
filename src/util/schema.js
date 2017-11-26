import { schema } from 'normalizr'

const user = new schema.Entity('users')

const post = new schema.Entity('posts', {
  author: user
})

const comments = new schema.Entity('comments', {
  author: user
})

export const postSchema = { posts: [ post ] }

export const commentSchema = { comments: [ comments ] }
