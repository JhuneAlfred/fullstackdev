import { combineReducers } from 'redux'
import PostsReducer from './reducer_posts'
//import ActiveBook from './reducer_active_book'

const rootReducer = combineReducers({
  posts: PostsReducer
})

export default rootReducer
