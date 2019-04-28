<template>
  <div>
    <h2>Register</h2>
    <input
      placeholder="Name"
      :value="form.name">
    <input
      type="email"
      placeholder="Email"
      :value="form.email">
    <input
      type="password"
      placeholder="Password"
      :value="form.password">
    <button @click="register">
      Register
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {}
  }),
  methods: {
    async register() {
      const jsonResponse = await 
        this.$http.$post('api/users', this.form)
      if (jsonResponse.success) {
        this.$router.push('/login')
      }
    }
  }
}
</script>
