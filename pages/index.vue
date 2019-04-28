<template>
  <div>
    Hello, {{ user.name }}!
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  middleware: 'auth',
  data: () => ({
    user: {}
  }),
  async asyncData({ $http, store }) {
    return $http.$get('api/user')
  }
}
</script>
