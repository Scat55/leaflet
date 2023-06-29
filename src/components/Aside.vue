<template>
  <div class="aside">
    <p class="aside__name"> <span class=aside__name-litle>
        Наименование:</span> {{ named__map }}</p>

    <div class="aside__choice">
      <ul class="aside__choice-list">
        <router-link to="map">
          <li class="choice__list-item">Лесничества</li>
        </router-link>
        <router-link to="emtymap">
          <li class="choice__list-item">Пустая</li>
        </router-link>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    named__map: {
      type: String,
    },


  },
  data() {
    return {

    }
  },

}
</script>

<style lang="scss" scoped>
.aside {
  height: 80vh;
  width: 25vw;
  // background-color: rgb(197, 232, 197);
  border: 0.2rem solid rgb(197, 232, 197);
  border-radius: 1rem;
  margin-top: 5rem;
  margin-left: 1rem;


  &__name {
    margin: 1rem;
    border-bottom: 1px solid rgb(197, 232, 197);

    &-litle {
      font-size: 0.8rem;
      color: #908c8c;
    }
  }

  &__choice-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .choice__list-item {
    list-style: none;
    cursor: pointer;
  }

}
</style>