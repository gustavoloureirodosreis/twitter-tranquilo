import { zuck } from './db_people'
import { todos } from './db_todos'
// import { tweets } from './db_tweets'
import { mockasync } from './mockutils'

const keepLoggedIn = true

export default {
  login (username, password) {
    return mockasync(zuck)
  },
  logout () {
    return mockasync({})
  },
  whoami () {
    const iam = {authenticated: keepLoggedIn}
    if (iam.authenticated) {
      iam.user = zuck
    }
    return mockasync(iam)
  },
  settings () {
    return mockasync({
      SENTRY_DSN_FRONT: ''
      // SENTRY_DSN_FRONT: 'https://abcd1234@sentry.example.com/10'
    })
  },
  list_todos () {
    return mockasync(todos)
  },

  get_user_details (username) {
    const avatar = {
      '@jokerp5': 'https://avatarfiles.alphacoders.com/189/189926.png',
      '@skullp5': 'https://static.zerochan.net/Skull.%28Persona.5%29.full.2443207.png',
      '@thetruemorgana': 'https://i.pinimg.com/736x/08/6a/95/086a95fd5b788b8b9bf4c93878513376.jpg',
      '@meowmeowpanther': 'https://pbs.twimg.com/media/EAUR6oPWsAAf4SO.jpg',
      '@foxp5': 'https://i.ytimg.com/vi/ttkVcs0gEKY/maxresdefault.jpg'
    }[username]

    return mockasync({
      username,
      avatar,
      last_tweet: 'Tweet mais recente',
      ifollow: false
    })
  },

  follow (username) {
    return mockasync({})
  },

  unfollow (username) {
    return mockasync({})
  },

  tweet (text) {
    return mockasync({
      id: 1000,
      author_name: 'Whatever',
      author_username: '@whatever',
      author_avatar: 'http://1.bp.blogspot.com/-A9_ROvP0efw/TZI9dUsXAKI/AAAAAAAAGCI/rD_-a3ZBF3U/s1600/Isaac_Newton_Biography%255B1%255D.jpg',
      created_at: new Date().toISOString(),
      text
    })
  },

  // TO-DO: Refactor this
  list_tweets (username) {
    const d = new Date()
    const _1min = 60000
    const _1h = 60 * _1min
    const _1d = 24 * _1h
    const d1 = new Date(d - 15 * _1min)
    const d2 = new Date(d - 2 * _1h)
    const d3 = new Date(d - 1 * _1d)
    const d4 = new Date(d - 7 * _1d)
    const d5 = new Date(d - 144 * _1d)

    const tweets = [
      {
        id: 1,
        author_name: 'Joker',
        author_username: username || '@jokerp5',
        author_avatar: 'https://avatarfiles.alphacoders.com/189/189926.png',
        created_at: d1.toISOString(),
        text: 'Isso é um tuíte de respeito, bixo!'
      },
      {
        id: 2,
        author_name: 'Skull',
        author_username: username || '@skullp5',
        author_avatar: 'https://static.zerochan.net/Skull.%28Persona.5%29.full.2443207.png',
        created_at: d2.toISOString(),
        text: 'Código dualidade particula-onda!'
      },
      {
        id: 3,
        author_name: 'Morgana',
        author_username: username || '@thetruemorgana',
        author_avatar: 'https://i.pinimg.com/736x/08/6a/95/086a95fd5b788b8b9bf4c93878513376.jpg',
        created_at: d3.toISOString(),
        text: '[] + [] dá string. Isso só pode ser javascript.'
      },
      {
        id: 4,
        author_name: 'Panther',
        author_username: username || '@meowmeowpanther',
        author_avatar: 'https://pbs.twimg.com/media/EAUR6oPWsAAf4SO.jpg',
        created_at: d4.toISOString(),
        text: 'Aqui não tem miséria!'
      },
      {
        id: 5,
        author_name: 'Fox',
        author_username: username || '@foxp5',
        author_avatar: 'https://i.ytimg.com/vi/ttkVcs0gEKY/maxresdefault.jpg',
        created_at: d5.toISOString(),
        text: 'É o que eu chamo de importação na marra!'
      }
    ]
    return mockasync(tweets)
  },

  add_todo (newtask) {
    return mockasync({description: newtask, done: false})
  }
}
