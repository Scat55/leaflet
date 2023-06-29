<template>
  <div class="emptymap">
    <Aside />
    <div class="map ">
      <router-link
        to="/"
        class="map__link"
      >
        <div class="emtymap__btn">На главную</div>
      </router-link>
      <l-map
        style="height: 80vh"
        :zoom="zoom"
        :center="center"
      >
        <l-tile-layer
          :url="url"
          :attribution="attribution"
        ></l-tile-layer>
      </l-map>
    </div>
  </div>
</template>

<script>
import Aside from './Aside.vue';

import { LMap, LTileLayer, LMarker, LPolygon, LGeoJson } from 'vue2-leaflet';
export default {
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
    LMarker,
    LPolygon,
    Aside
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
    };
  },
}
</script>

<style lang="scss" scoped>
.emptymap {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.emtymap__btn {
  padding: 1rem;
  width: 7rem;
  border: 1px solid #000;
  border-radius: 1rem;
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
}
</style>