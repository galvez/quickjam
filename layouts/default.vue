<template>
  <main>
    <nuxt />
  </main>
</template>

<style>
html, body, #__nuxt, #__layout {
  font-size: 16px;
  width: 100%;
  height: 100%;
  margin: 0px;
}
main {
  width: 100%;
  height: 100%;
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
main div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
main input, main button {
  outline: none;
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
}
</style>