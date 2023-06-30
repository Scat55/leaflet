<template>
  <div class="dots">
    <Aside
      :infoDots="infoId.data"
      :isVisibleInfo="isVisible"
    />
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
        ></l-tile-layer>
        <l-circle-marker
          v-for="inf in info"
          :radius="circle.radius"
          :color="circle.color"
          :lat-lng="inf.geometry.coordinates"
          @click="showInfo()"
        ></l-circle-marker>
      </l-map>

      <!-- <p>{{ infoId.data }}</p> -->
    </div>
  </div>
</template>

<script>
import Aside from './Aside.vue';
import { LMap, LTileLayer, LCircleMarker, LGeoJson } from 'vue2-leaflet';
import axios from 'axios';

export default {
  components: {
    Aside,
    LMap,
    LTileLayer,
    LCircleMarker,
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 10,
      fillColor: "#e4ce7f",
      center: [52.585536, 39.620851],
      info: {},
      circle: {
        center: [52.585536, 39.620851],
        radius: 6,
        color: '#f63f3f'
      },
      infoId: {},
      isVisible: false
    }
  },
  mounted() {
    axios.get('https://gis-api.admlr.lipetsk.ru/api/v1/beautification/greenspaces/points')
      .then(response => (this.info = response.data.features))
      .catch(error => console.log(error));

    axios.get('https://gis-api.admlr.lipetsk.ru/api/v1/beautification/greenspaces/data/150')
      .then(response => (this.infoId = response.data))
      .catch(error => console.log(error));

  },
  methods: {
    showInfo() {
      this.isVisible = true
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