import { schema } from 'normalizr'

const user = new schema.Entity('users')

const category = new schema.Entity('categories')

const post = new schema.Entity('posts', {
  author: user,
  category: category
})

export const userSchema = { users: [ user ] }

export const postSchema = { posts: [ post ] }

export const categorySchema = { categories: [ category ] }
