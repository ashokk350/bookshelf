<template>
  <div align="center">
    <book-form></book-form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BookForm from '@/components/books/Form'

export default {
  components: {
    BookForm
  },

  computed: {
    ...mapState(['projects'])
  }
}
</script>
