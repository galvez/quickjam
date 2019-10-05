<template>
  <div>
    Hello, {{ user.name }}!
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data: () => ({
    user: {}
  }),
  async asyncData({ $http }) {
    return $http.$get('api/user')
  }
}
</script>
