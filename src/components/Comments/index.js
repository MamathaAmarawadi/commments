import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    commentList: [],
    num: '',
    totalLength: 0,
    isLiked: false,
  }

  onName = event => {
    this.setState({name: event.target.value})
  }

  onComment = event => {
    this.setState({comment: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault()
    const y = Math.floor(Math.random() * 5)
    const {name, comment, commentList, num, totalLength, isLiked} = this.state
    const newObj = {
      id: uuidv4(),
      name,
      comment,
      num: initialContainerBackgroundClassNames[y],
      isLiked,
    }
    console.log(newObj)
    this.setState({
      commentList: [...commentList, newObj],
      totalLength: totalLength + 1,
      name: '',
      comment: '',
      num: '',
      isLiked: false,
    })
  }

  onLiked = id => {
    console.log(id)
    const {isLiked} = this.state

    this.setState(prevState => ({
      commentList: prevState.commentList.map(e => {
        if (e.id === id) {
          return {...e, isLiked: !e.isLiked}
        }
        return e
      }),
    }))
  }

  onDelete = id => {
    const {commentList, totalLength} = this.state
    const filteredList = commentList.filter(e => e.id !== id)
    this.setState({commentList: filteredList, totalLength: totalLength - 1})
  }

  render() {
    const {name, comment, totalLength, commentList} = this.state
    console.log(commentList)
    return (
      <div className="container">
        <div className="row">
          <div>
            <h1 className="heading">Comments</h1>
            <p>Say something about 4.0 Technology</p>
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                className="input"
                onChange={this.onName}
                value={name}
              />
              <br />

              <textarea
                placeholder="Your Comment"
                rows="10"
                cols="46"
                onChange={this.onComment}
                value={comment}
              >
                ooo
              </textarea>
              <br />
              <button className="btn">Add Comment</button>
            </form>
          </div>

          <div className="pic">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="img"
            />
          </div>
        </div>

        <hr />

        <div className="bottom-container">
          <div className="row1">
            <div className="fill">
              <p>{totalLength}</p>
            </div>
            <div>
              <p>Comments</p>
            </div>
          </div>
        </div>

        <div>
          <ul className="ul">
            {commentList.map(e => (
              <CommentItem
                comments={e}
                key={e.id}
                Delete={this.onDelete}
                onLikeFun={this.onLiked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
