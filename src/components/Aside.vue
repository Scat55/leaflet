<template>
  <div class="aside">
    <p class="aside__name"> <span class=aside__name-litle>Наименование:</span> {{ named__map }}</p>
  </div>
</template>

<script>
export default {
  props: {
    named__map: {
      type: String,
    },

  },
  methods: {

  },

  mounted() {
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

    &-litle {
      font-size: 0.8rem;
      color: #908c8c;
    }
  }
}
</style>