import { FETCH_POSTS, NEW_POST } from './types';

export function fetchPosts() {
  return function(dispatch) {
    console.log(`fetching`);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts =>
        dispatch({
          type: FETCH_POSTS,
          payload: posts
        })
      );
  };
}
export function createPosts(postData) {
  return function(dispatch) {
    console.log(`fetching`);
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
      .then(res => res.json())
      .then(post =>
        dispatch({
          type: NEW_POST,
          payload: post
        })
      );
  };
}