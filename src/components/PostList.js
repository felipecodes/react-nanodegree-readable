import React, { Component } from 'react'

class PostList extends Component {
  componentWillMount() {
    this.props.fetchPosts(this.props.match.params.category)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.category !== nextProps.match.params.category) {
      this.props.fetchPosts(nextProps.match.params.category)
    }
  }

  render() {
    return (
      <div>
        <h1>PostList</h1>
        <ul>
          {this.props.posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default PostList
