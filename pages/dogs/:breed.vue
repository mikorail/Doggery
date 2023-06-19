<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8">
        <h1 class="my-4 text-capitalize">{{ breedTitle }}</h1>
        <b-carousel ref="carousel" :interval="0" controls indicators background="#ababab">
          <b-carousel-slide v-for="(image, index) in images" :key="index" :img-src="image" alt="Dog Image"></b-carousel-slide>
        </b-carousel>
        <div class="image-thumbnails">
          <div v-for="(image, index) in images" :key="index" class="thumbnail" @click="changeImage(index)">
            <img :src="image" :alt="thumbnailAlt" class="thumbnail-image">
          </div>
        </div>
      </div>
      <div class="col-lg-4 order-card" id="order-card">
        <b-form-group v-if="subBreeds.length > 0" id="subBreedGroup" label="Sub-breed:" label-for="subBreedSelect">
          <b-form-select id="subBreedSelect" v-model="selectedSubBreed" :options="subBreeds"></b-form-select>
        </b-form-group>
        <p class="ordering-text">Order this breed:</p>
        <b-form @submit="submitOrder" class="my-4">
          <b-form-group id="emailGroup" label="Email address:" label-for="emailInput" :state="emailState" :invalid-feedback="emailFeedback">
            <b-form-input id="emailInput" v-model="email" type="email" required></b-form-input>
          </b-form-group>
          <b-form-group id="quantityGroup" label="Quantity:" label-for="quantityInput" :state="quantityState" :invalid-feedback="quantityFeedback">
            <b-form-input id="quantityInput" v-model="quantity" type="number" min="1" required></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Order</b-button>
        </b-form>
      </div>
    </div>

    <!-- Order details modal -->
    <b-modal v-model="showModal" title="Order Details" ok-only @ok="resetOrder">
      <p>Breed: {{ breedTitle }}</p>
      <p v-if="selectedSubBreed">Sub-breed: {{ selectedSubBreed }}</p>
      <p>Email: {{ email }}</p>
      <p>Quantity: {{ quantity }}</p>
      <p>Serial Number: {{ serialNumber }}</p>
      <hr>
      <p>Dummy Receipt:</p>
      <pre>{{ receipt }}</pre>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'dogs',
  data() {
    return {
      breed: '',
      subBreeds: [],
      selectedSubBreed: '',
      images: [],
      email: '',
      quantity: 1,
      emailState: null,
      quantityState: null,
      showModal: false,
      serialNumber: '',
      receipt: '',
    };
  },
  computed: {
    breedTitle() {
      if (this.selectedSubBreed) {
        return `${this.breed} - ${this.selectedSubBreed}`;
      }
      return this.breed;
    },
    thumbnailAlt() {
      if (this.selectedSubBreed) {
        return `${this.breed} - ${this.selectedSubBreed} Thumbnail`;
      }
      return 'Thumbnail';
    },
  },
  mounted() {
    // Fetch breed and sub-breeds from the route params
    this.breed = this.$route.params.breed;
    this.fetchSubBreeds();
    this.fetchDogImages();
  },
  watch: {
    breed() {
      this.selectedSubBreed = '';
      this.fetchSubBreeds();
      this.fetchDogImages();
    },
    selectedSubBreed() {
      this.fetchDogImages();
    },
  },
  methods: {
    async fetchDogImages() {
      try {
        const subBreed = this.selectedSubBreed ? `/${this.selectedSubBreed}` : '';
        const response = await axios.get(
          `https://dog.ceo/api/breed/${this.breed}${subBreed}/images/random/4`
        );
        this.images = response.data.message;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchSubBreeds() {
      try {
        const response = await axios.get(`https://dog.ceo/api/breed/${this.breed}/list`);
        this.subBreeds = response.data.message;

        // Select the first sub-breed by default
        if (this.subBreeds.length > 0) {
          this.selectedSubBreed = this.subBreeds[0];
        }
      } catch (error) {
        console.error(error);
      }
    },
    submitOrder(event) {
      event.preventDefault();

      // Perform form validation
      this.emailState = this.validateEmail();
      this.quantityState = this.validateQuantity();

      // If form is valid, proceed with order submission
      if (this.emailState && this.quantityState) {
        // Generate random serial number
        this.serialNumber = Math.floor(Math.random() * 1000000000);

        // Generate dummy receipt
        this.generateReceipt();

        // Show order details modal
        this.showModal = true;
      }
    },
    validateEmail() {
      // Basic email validation using regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(this.email);
    },
    validateQuantity() {
      // Check if quantity is a positive integer
      return Number.isInteger(this.quantity) && this.quantity > 0;
    },
    changeImage(index) {
      this.$refs.carousel.setSlide(index);
    },
    generateReceipt() {
      // Generate a dummy receipt based on the order details
      this.receipt = `Receipt\n\nBreed: ${this.breedTitle}\nEmail: ${this.email}\nQuantity: ${this.quantity}\nSerial Number: ${this.serialNumber}`;
    },
    resetOrder() {
      // Reset the order form and close the modal
      this.email = '';
      this.quantity = 1;
      this.emailState = null;
      this.quantityState = null;
      this.serialNumber = '';
      this.receipt = '';
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
.carousel .carousel-control-prev-icon,
.carousel .carousel-control-next-icon {
  height: 50px;
  width: 50px;
  outline: black;
  background-size: 100%, 100%;
  border-radius: 50%;
  border: 1px solid black;
  background-image: none;
}

.image-thumbnails {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.thumbnail {
  cursor: pointer;
  margin: 5px;
}

.thumbnail-image {
  height: 50px;
  width: 50px;
}

.order-card {
  background-color: whitesmoke;
  margin-top: 9%;
  padding-top: 5%;
  border-radius: 5px;
  height: 30%;
  position: sticky;
  top: 20px;
}
</style>
