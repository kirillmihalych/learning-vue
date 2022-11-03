const app = Vue.createApp({
  data() {
    return {
      showBooks: 'false',
      books: [
        { title: 'name of the wind', author: 'patrick rothfuss', isFav: true },
        {
          title: 'the way of kings',
          author: 'brandon sanderson',
          isFav: false,
        },
        { title: 'the final empire', author: 'sander brandoson', isFav: true },
      ],
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    toggleFav(book) {
      book.isFav = !book.isFav
    },
  },
})

app.mount('#app')
