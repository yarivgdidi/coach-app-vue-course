<template>
  <header>
    <nav>
      <h1><router-link to="/">Find a Coach</router-link></h1>
      <ul>
        <li>
          <router-link to="/coaches">Coaches</router-link>
        </li>
        <li>
          <router-link to="/requests">Requests</router-link>
        </li>
      </ul>

    </nav>
  </header>
</template>

<script>
export default {
name: "TheHeader"
}
</script>

<style scoped>
 @import url('../../assets/header.css');
</style>
