<template>
  <div class="login">
    <input
      placeholder="Email"
      :value="form.email">
    <input
      placeholder="Password"
      :value="form.password">
    <button @click="login">
      Login
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {}
  }),
  async asyncData({ app }) {
    const response = await app.$http.get('api/ping')
    return {
      pongMessage: await response.text()
    }
  },
  mounted() {
    alert(this.pongMessage)
  }
}
</script>
