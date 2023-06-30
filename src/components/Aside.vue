<template>
  <div class="aside">
    <p class="aside__name"> <span class=aside__name-litle>
        Наименование:</span> {{ named__map }}</p>

    <div class="aside__choice">
      <ul class="aside__choice-list">
        <router-link
          to="map"
          class="aside__choice-link"
        >
          <li class="choice__list-item">Лесничества</li>
        </router-link>
        <router-link
          to="emtymap"
          class="aside__choice-link"
        >
          <li class="choice__list-item">Пустая</li>
        </router-link>
        <router-link
          to="dots"
          class="aside__choice-link"
        >
          <li class="choice__list-item">Точки</li>
        </router-link>

      </ul>
    </div>
    <div class="aside__roles">
      <p>Id объекта: {{ infoDots.id }}</p>
      <p>Адресс: {{ infoDots.column_4 }}</p>
      <p>Наименование: {{ infoDots.column_6 }}</p>
      <p>Категория: {{ infoDots.column_7 }}</p>
      <p>Состояние: {{ infoDots.column_8 }}</p>
      <p>Объект: {{ infoDots.column_18 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    named__map: {
      type: String,
    },
    infoDots: {
      type: Object,
    }


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

  &__roles {
    border: 1px solid #000;
    margin: 1rem;
    text-align: center;
    border-radius: 1rem;
  }

  &__choice-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__choice-link {
    text-decoration: none;
    color: #000;
  }

  .choice__list-item {
    border: 1px solid #000;
    border-radius: 1rem;
    width: 10rem;
    padding: 0.5rem;
    outline: none;
    text-align: center;
    list-style: none;
    cursor: pointer;
    transition: all .3s;

    &:hover {
      transform: scale(1.1);
    }
  }

}
</style>