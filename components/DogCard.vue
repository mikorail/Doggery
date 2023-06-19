<template>
  <div class="col mb-5">
    <div :style="{ backgroundImage: `url('${image}')` }" class="dog-card">
      <div v-if="isLoading" class="dog-card-loader">
        <div class="spinner"></div>
      </div>
      <div v-else class="dog-card-overlay"></div>
      <div class="dog-card-content">
        <h5 class="card-title">{{ breed }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    breed: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      image: '', // Initialize image as an empty string
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.loadingBreeds.includes(this.breed);
    },
  },
  methods: {
    async fetchDogImage() {
      try {
        await this.$store.dispatch('fetchDogImage', this.breed);
        this.image = this.$store.state.breedImages[this.breed];
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.fetchDogImage();
  },
};
</script>



<style scoped>
.dog-card {
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  width: 200px;
  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.dog-card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(237, 231, 225, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.dog-card-content {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px;
  width: 100%;
  color: white;
  transition: transform 0.3s ease;
  transform: translateY(100%);
}

.dog-card:hover .dog-card-overlay {
  opacity: 1;
  color: whitesmoke;
}

.dog-card:hover .dog-card-content {
  transform: translateY(0%);
  color: whitesmoke;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  color: black;
  text-transform: capitalize;
}

.dog-card-loader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(237, 231, 225, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
