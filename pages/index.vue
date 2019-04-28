<template>
  <div>
    Hello, {{ user.name }}!
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  middleware: 'auth',
  computed: mapState(['user'])
}
</script>
