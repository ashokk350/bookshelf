<template>
  <div class="col-md-6">
    <div class="card">
      <div class="card-body">
        <div class="card-header">
          <h4>New Books</h4>
        </div><br />
        <b-form @submit.prevent="onSubmit">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="date">Title</label>
              <input class="form-control" name="title" v-model="newBook.title">
            </div>
            <div class="form-group col-md-6">
              <label for="author">Author</label>
              <input class="form-control" name="title" v-model="newBook.author">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="isbn">ISBN</label>
              <input class="form-control" v-model="newBook.isbn">
            </div>
            <div class="form-group col-md-6">
              <label for="language">Language</label>
              <input class="form-control" v-model="newBook.language">
            </div>
          </div>
          <div>
            <div class="form-group">
              <label for="comments">Description</label>
              <textarea maxlength="10000" class="form-control" rows="3" v-model="newBook.description"></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <button type="submit" name="submit" class="btn btn-info pull-right">Submit</button>
            </div>
            <div class="col-md-6 float-right">
               <input type="file" ref="file" :v-model="newBook.cover_image" />
            </div>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  porps: ['bookId'],

  computed: {
    ...mapState(['books'])
  },

  data () {
    return {
      newBook: { title: null, author: null, isbn: null, description: null, language: null, cover_image: null }
    }
  },

  methods: {
    async onSubmit () {
      try {
        let formData = new FormData();
        formData.append('cover_image', this.$refs.file.files[0])
        formData.append('title', this.newBook.title)
        formData.append('author', this.newBook.author)
        formData.append('description', this.newBook.description)
        formData.append('language', this.newBook.language)
        formData.append('isbn', this.newBook.isbn)

        if (this.$attrs.bookId) {
          formData.append('id', this.$attrs.bookId)
          await this.$store.dispatch('updateBook',formData)
        } else {
          await this.$store.dispatch('createBooks', formData)
        }
        await this.$store.dispatch('fetchBooks', '')
        this.$router.push('/')
      } catch (error) {
        console.log(error)
      }
    },

    getEditBook() {
      this.newBook = this.books.find(el => el.id == this.$attrs.bookId)
    }
  },

  mounted() {
    if (this.$attrs.bookId) {
      this.getEditBook()
    }
  }
}
</script>