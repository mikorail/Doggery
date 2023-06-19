<template>
  <div>
    <b-carousel v-if="breed === 'terrier'" :interval="0">
      <b-carousel-slide v-for="image in images" :key="image" :img-src="image"></b-carousel-slide>
    </b-carousel>
    <div v-else>
      <b-carousel-indicators v-model="slideIndex" :length="images.length"></b-carousel-indicators>
      <b-carousel-control prev-icon="chevron-left" next-icon="chevron-right" direction="prev" @click.native="prevSlide" />
      <b-carousel-control prev-icon="chevron-left" next-icon="chevron-right" direction="next" @click.native="nextSlide" />
      <b-carousel-slide v-for="(image, index) in images" :key="image" :img-src="image" :caption="index + 1"></b-carousel-slide>
    </div>
  </div>
</template>

<script>
import { computed, ref } from '@nuxtjs/composition-api';

export default {
  props: {
    breed: {
      type: String,
      required: true,
    },
  },
  setup() {
    const images = ref([]);
    const slideIndex = ref(0);

    const fetchImages = async () => {
      try {
        const response = await fetch(`https://dog.ceo/api/breed/${this.breed}/images`);
        const data = await response.json();
        images.value = data.message;
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();

    const prevSlide = () => {
      slideIndex.value = slideIndex.value === 0 ? images.value.length - 1 : slideIndex.value - 1;
    };

    const nextSlide = () => {
      slideIndex.value = slideIndex.value === images.value.length - 1 ? 0 : slideIndex.value + 1;
    };

    return {
      images,
      slideIndex,
      prevSlide,
      nextSlide,
    };
  },
};
</script>
