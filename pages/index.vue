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
}
</script>
