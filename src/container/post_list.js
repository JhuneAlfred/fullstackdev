import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectPost } from '../actions/index'
import { bindActionCreators } from 'redux'

class PostList extends Component {
  renderList() {
    return this.props.posts.map(post => {
      return (
        <div
          style={{ cursor: 'pointer' }}
          key={post.title}
          onClick={() => this.props.selectPost(post)}
          className="list-group-item"
        >
          <div style={{ fontSize: '1.15em' }}>{post.title}</div>
          <div style={{ fontSize: '.90em' }}>{post.detail}</div>
          <br />
        </div>
      )
    })
  }
  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>
  }
}

function mapStateToProps(state) {
  //Whatever is returned will show up as props inside of PostList
  return {
    posts: state.posts
  }
}

//anything returned from this function will end up as props on the postlist container
function mapDispatchToProps(dispatch) {
  //whenever selectPost is called, the result should be passed to all reducers
  return bindActionCreators({ selectPost: selectPost }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)
