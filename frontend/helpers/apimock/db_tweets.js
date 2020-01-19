const d = new Date()
const _1min = 60000
const _1h = 60 * _1min
const _1d = 24 * _1h
const d1 = new Date(d - 15 * _1min)
const d2 = new Date(d - 2 * _1h)
const d3 = new Date(d - 1 * _1d)
const d4 = new Date(d - 7 * _1d)
const d5 = new Date(d - 144 * _1d)

export const tweets = {
  tweets: [
    {
      id: 1,
      author_name: 'Joker',
      author_username: '@jokerp5',
      author_avatar: 'https://avatarfiles.alphacoders.com/189/189926.png',
      created_at: d1.toISOString(),
      text: 'Isso é um tuíte de respeito, bixo!'
    },
    {
      id: 2,
      author_name: 'Skull',
      author_username: '@skullp5',
      author_avatar: 'https://static.zerochan.net/Skull.%28Persona.5%29.full.2443207.png',
      created_at: d2.toISOString(),
      text: 'Código dualidade particula-onda!'
    },
    {
      id: 3,
      author_name: 'Morgana',
      author_username: '@thetruemorgana',
      author_avatar: 'https://i.pinimg.com/736x/08/6a/95/086a95fd5b788b8b9bf4c93878513376.jpg',
      created_at: d3.toISOString(),
      text: '[] + [] dá string. Isso só pode ser javascript.'
    },
    {
      id: 4,
      author_name: 'Panther',
      author_username: '@meowmeowpanther',
      author_avatar: 'https://pbs.twimg.com/media/EAUR6oPWsAAf4SO.jpg',
      created_at: d4.toISOString(),
      text: 'Aqui não tem miséria!'
    },
    {
      id: 5,
      author_name: 'Fox',
      author_username: '@foxp5',
      author_avatar: 'https://i.ytimg.com/vi/ttkVcs0gEKY/maxresdefault.jpg',
      created_at: d5.toISOString(),
      text: 'É o que eu chamo de importação na marra!'
    }
  ]
}
