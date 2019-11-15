<template>
  <div align="center">
    <book-form :bookId="$route.query.bookId"></book-form>
  </div>
</template>

<script>
import BookForm from '@/components/books/Form'

export default {
  components: {
    BookForm
  }
}
</script>
