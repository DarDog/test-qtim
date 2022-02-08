import { MOCKUP_BASE_URL } from "../constants/constants";

class Mockup {
  constructor (baseUrl) {
    this._baseUrl = baseUrl
  }

  getPosts () {
    return fetch(`${ this._baseUrl }/qtim-test-work/posts/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(this._getResponse)
  }

  getPostById (postId) {
    return fetch(`${ this._baseUrl }/qtim-test-work/posts/${ postId }`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(this._getResponse)
  }

  _getResponse (res) {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(res)
    }
  }
}

export const mockupApi = new Mockup(MOCKUP_BASE_URL);
