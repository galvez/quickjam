<template>
  <div>
    Hello, {{ user.email }}!
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  middleware: 'auth',
  computed: mapState(['user'])
}
</script>
