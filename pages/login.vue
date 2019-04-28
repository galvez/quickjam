<template>
  <div>
    <h2>Login</h2>
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
  methods: {
    login() {
    }
  }
}
</script>
