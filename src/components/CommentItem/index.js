// Write your code here

import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {comments, Delete, onLikeFun} = props

  const {id, name, comment, num, isLiked} = comments

  const firstLetter = name[0].toUpperCase()

  const time = formatDistanceToNow(new Date())

  const liked = isLiked ? (
    <div className="inside">
      <img
        src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
        className="likepic"
        alt="liked"
      />
      <p className="color">Like</p>
    </div>
  ) : (
    <div className="inside">
      <img
        src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
        alt="like"
        className="likepic"
      />
      <p>Like</p>
    </div>
  )
  const onDeletebtn = () => {
    Delete(id)
  }

  const onClicked = () => {
    onLikeFun(id)
  }

  return (
    <li>
      <div className="design">
        <div>
          <p className={`profile ${num}`}>{firstLetter}</p>
        </div>
        <div className="column">
          <div className="inside">
            <h1>{name}</h1>
            <p className="time">{time}</p>
          </div>
          <div>
            <p>{comment}</p>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div>
          <button className="onLike" onClick={onClicked}>
            {liked}
          </button>
        </div>

        <div>
          <button
            className="deletebtn"
            onClick={onDeletebtn}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="deletepic"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CommentItem
