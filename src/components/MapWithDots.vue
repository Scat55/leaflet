<template>
  <div class="dots">
    <Aside />
    <div class="map">
      <router-link
        to="/"
        class="map__link"
      >
        <div class="map__btn">На главную</div>
      </router-link>
      <l-map
        style="height: 80vh"
        :zoom="zoom"
        :center="center"
      >
        <l-tile-layer
          :url="url"
          :attribution="attribution"
        ></l-tile-layer></l-map>
    </div>
  </div>
</template>

<script>
import Aside from './Aside.vue';
import { LMap, LTileLayer } from 'vue2-leaflet';

export default {
  components: {
    Aside,
    LMap,
    LTileLayer
  },
  data() {
    return {
      markerLatLng: [52.391972, 38.919456],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 10,
      fillColor: "#e4ce7f",
      center: [52.391972, 38.919456],
    }
  },
}
</script>

<style lang="scss" scoped>
.dots {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
}

.map {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  width: 80vw;

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