import axios from 'axios';

const dogAPI = axios.create({
  baseURL: 'https://dog.ceo/api/',
});

export const state = () => ({
  breeds: [],
  breedImages: {},
  loadingBreeds: [],
  subBreeds: {},
});

export const mutations = {
  setBreeds(state, breeds) {
    state.breeds = breeds;
  },
  setBreedImages(state, { breed, image }) {
    state.breedImages[breed] = image;  // Assign "image" instead of "images"
  },
  setLoadingBreeds(state, breed) {
    state.loadingBreeds.push(breed);
  },
  unsetLoadingBreeds(state, breed) {
    state.loadingBreeds = state.loadingBreeds.filter(
      (loadingBreed) => loadingBreed !== breed
    );
  },
  setSubBreeds(state, { breed, subBreeds }) {
    state.subBreeds[breed] = subBreeds;
  },
};


export const actions = {
  async fetchBreeds({ commit }) {
    try {
      const response = await dogAPI.get('breeds/list/all');
      const breeds = Object.keys(response.data.message);
      commit('setBreeds', breeds);
    } catch (error) {
      console.error(error);
    }
  },
  async fetchDogImage({ commit, state }, breed) {
    try {
      commit('setLoadingBreeds', breed);
      const response = await dogAPI.get(`breed/${breed}/images/random`);
      const image = response.data.message;
      commit('setBreedImages', { breed, image });

      const subBreeds = state.subBreeds[breed];
      if (subBreeds && subBreeds.length > 0) {
        for (const subBreed of subBreeds) {
          const subBreedResponse = await dogAPI.get(`breed/${breed}/${subBreed}/images/random`);
          const subBreedImage = subBreedResponse.data.message;
          const subBreedKey = `${breed}-${subBreed}`;
          commit('setBreedImages', { breed: subBreedKey, image: subBreedImage });
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      commit('unsetLoadingBreeds', breed);
    }
  },
  async fetchSubBreeds({ commit }, breed) {
    try {
      const response = await dogAPI.get(`breed/${breed}/list`);
      const subBreeds = response.data.message;
      commit('setSubBreeds', { breed, subBreeds });
    } catch (error) {
      console.error(error);
    }
  },
};
