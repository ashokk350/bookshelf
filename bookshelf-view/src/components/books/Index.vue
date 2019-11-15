<template>
  <div class="hello">
    <div class="row col-md-3">
      <router-link class="btn btn-info" :to="{ name: 'NewBook' }">New Book</router-link>
    </div><br>
    <div class="row">
      <div class="col-md-3">
        <b-form-input v-model="search" @input="getBooks" placeholder="Search"></b-form-input>
      </div>
    </div><br>
    <div>
      <b-table hover bordered small head-variant="light" :items="books" :fields="fields">
        <template v-slot:cell(action)="data">
          <div class="btn-group btn-group-sm">
            <button type="button" class="btn btn-info" @click="deleteBook(data.item.id)">Delete</button>
            <router-link class="btn btn-info" :to="{ name: 'EditBook', query: { bookId: data.item.id } }">Edit</router-link>
            <router-link class="btn btn-info" :to="{ name: 'ShowBook', query: { bookId: data.item.id } }">Read</router-link>
          </div>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      search: null,
      fields: ['title', 'author', 'isbn', 'description', 'language', 'action']
    }
  },

  computed: {
    ...mapState(['books'])
  },

  methods: {
    async getBooks() {
      try {
        await this.$store.dispatch('fetchBooks', this.search)
      } catch (error) {
        console.log(error)
      }
    },

    async deleteBook(bookId) {
      try {
        await this.$store.dispatch('deleteBooks', bookId)
        this.getBooks()
      } catch (error) {
        console.log(error)
      }
    }
  },

  mounted () {
    this.getBooks()
  }
}
</script>

<style scoped>

</style>
