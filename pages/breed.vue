<template>
  <div class="breed-page">
    <h1 class="text-center display-flex">All Dogs</h1>
    <hr>
    <div class="dog-card-container">
      <NuxtLink v-for="dog in breeds" :key="dog" :to="`/dogs/${dog}`">
        <DogCard :breed="dog"/>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'breed',
  components: {
    DogCard: () => import('../components/DogCard.vue'),
  },
  data() {
    return {
      dogs: [],
    };
  },
  computed: {
    breeds() {
      return this.$store.state.breeds;
    },
  },
  mounted() {
    this.$store.dispatch('fetchBreeds');
  },
};
</script>

<style scoped>
.dog-card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.breed-page{
  margin:  5px, 5px, 5px 5px;
  background-color:rgb(240, 240, 240);

}
hr {
  border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}
/* .container{
  margin:auto;
} */
</style>



<!-- <template>
  <div>
    <h1>All Dog Breeds</h1>
    <ul>
      <li v-for="breed in breeds" :key="breed">
        <h2>{{ breed }}</h2>
        <div v-if="breedImages[breed]">
          <img v-for="image in breedImages[breed]" :key="image" :src="image" alt="Dog Image" />
        </div>
        <ul v-if="subBreeds[breed]">
          <li v-for="subBreed in subBreeds[breed]" :key="subBreed">
            {{ subBreed }} {{ breed }}
            <div v-if="breedImages[`${breed}/${subBreed}`]">
              <img v-for="image in breedImages[`${breed}/${subBreed}`]" :key="image" :src="image" alt="Dog Image" />
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    breeds() {
      return this.$store.state.breeds;
    },
    breedImages() {
      return this.$store.state.breedImages;
    },
    subBreeds() {
      return this.$store.state.subBreeds;
    },
  },
  mounted() {
    this.$store.dispatch('fetchBreeds');
  },
};
</script> -->
