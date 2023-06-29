<template>
  <div class="welcome">

    <img
      src="../assets/mem.jpg"
      alt=""
      class="weclome__img"
    >
    <router-link
      to="map"
      class='welcome__link'
    >
      <div class="welcome__btn">На карту</div>
    </router-link>


  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  gap: 0.5rem;


  &__link {
    text-decoration: none;
    color: #000;
    text-align: center;
  }

  &__btn {
    padding: 1rem;
    width: 7rem;
    border: 1px solid #000;
    border-radius: 1rem;
  }
}
</style>