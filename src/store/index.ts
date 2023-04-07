import { createStore } from 'vuex'

export default createStore({
  state: {
    navigation: [
      {
        id: 'my projects',
        link: '/my-projects',
        name: 'my_projects'
      },
      {
        id: 'work projects',
        link: '/work-projects',
        name: 'work_projects'
      },
      {
        id: 'about',
        link: '/about',
        name: 'about'
      }
    ],
    social: [
      {
        name: 'facebook',
        link: 'https://www.facebook.com/profile.php?id=100002158603006'
      },
      {
        name: 'instagram',
        link: 'https://www.instagram.com/artem.anpilov/'
      },
      {
        name: 'telegram',
        link: 'https://t.me/BlindResist'
      },
      {
        name: 'github',
        link: 'https://github.com/BlindResist'
      }
    ],
    pages: {
      portfolio: [
        {
          id: 'magnit',
          link: 'https://www.magnit.com/ru/',
          image: './images/logos/logo-magnit.png'
        },
        {
          id: 'globalports',
          link: 'https://www.globalports.com/ru/',
          image: './images/logos/logo-globalports.png'
        },
        {
          id: 'gazprom',
          link: 'https://ir.gazprom-neft.ru/',
          image: './images/logos/logo-gazprom.png'
        },
        {
          id: 'evraz',
          link: 'https://www.evraz.com/',
          image: './images/logos/logo-evraz.png'
        }
      ],
      projects: [
        {
          id: 'fast!cv',
          link: 'http://fastcv.digama.online/',
          image: './images/logos/logo-fast!cv.png'
        }
      ],
      about: {
        image: {
          src: '@/assets/images/itsme.jpg',
          alt: 'Its me :)'
        },
        name: 'Anpilov Artem',
        experience: 'Frontend dev since 2016',
        location: 'Saint-Petersburg, Russia',
        email: 'blind.resist@gmail.com',
        hobby: [
          {
            name: 'Coding'
          },
          {
            name: 'Music'
          },
          {
            name: 'Traveling'
          },
          {
            name: 'Gaming'
          }
        ],
        skills: [
          {
            name: 'JavaScript',
            experience: '5 years'
          },
          {
            name: 'VueJs',
            experience: '4 years'
          },
          {
            name: 'TypeScript',
            experience: '1.5 years'
          },
          {
            name: 'Webpack',
            experience: '3 years'
          },
          {
            name: 'Sass',
            experience: '4 years'
          },
          {
            name: 'Git',
            experience: '6 years'
          }
        ],
        tools: [
          {
            name: 'Figma'
          },
          {
            name: 'Adobe Ps'
          },
          {
            name: 'Adobe Ai'
          },
          {
            name: 'WebStorm'
          }
        ]
      }
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})
