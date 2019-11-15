<template>
  <div>
    asdwedaek {{book.image_url}}
    <b-img v-bind:src="require(url)" fluid alt="Fluid image"></b-img>
    <b-img v-bind:src="require('/home/ashokkumar/rails-app/bookshelf/public/system/books/cover_images/000/000/020/original/download.jpeg?1573807963')" fluid alt="Fluid image"></b-img>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['books'])
  },

  data () {
    return {
      book: null,
    }
  },

  methods: {
    getEditBook() {
      this.book = this.books.find(el => el.id == this.$route.query.bookId)
    }
  },

  mounted() {
    if (this.$route.query.bookId) {
      this.getEditBook()
    }
  }
}
</script>