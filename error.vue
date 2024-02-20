<template>
  <main class="wrapper">
    <div class="error__container">
      <div class="error__items">
        <img src="~assets/images/hero-bottom/hb-logo.svg" alt="Logo image" />
        <h1>Sorry, something went wrong</h1>
        <h2>{{ error.statusCode }} - Page not found</h2>
      </div>
    </div>
  </main>
</template>

<script setup>
  const error = useError();
</script>