<template lang="html">
  <div class="app__new">
    <h2 class="title">Found a Pupper? We can help!</h2>
    <form @submit.prevent="submit">
      <p class="control">
        <label for="pup-name" class="label">Name</label>
        <input type="text" class="input" v-model="formValues.name">
      </p>
      <p class="control">
        <label for="pup-age" class="label">Age</label>
        <input type="text" class="input" v-model="formValues.age">
      </p>
      <p class="control">
        <label for="pup-sex" class="label">Sex</label>
        <span class="select">
          <select v-model="formValues.sex">
            <option>Please Select an Option</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </span>
      </p>
      <p class="control">
        <label for="pup-color" class="label">Color</label>
        <input type="text" class="input" v-model="formValues.color">
      </p>
      <p class="control">
        <label for="pup-breed" class="label">Breed</label>
        <input type="text" class="input" v-model="formValues.breed">
      </p>
      <p class="control">
        <label for="pup-image" class="label">Image URL</label>
        <input type="text" v-model="formValues.image_url" class="input" v-model="formValues.image_url">
      </p>
      <p class="control">
        <label for="pup-description" class="label">Description</label>
        <textarea type="text" class="input" v-model="formValues.description"></textarea>
      </p>
      <p class="control">
        <a href="/" class="button">Back</a>
        <button class="button is-info" type="submit">Submit</button>
      </p>
    </form>
  </div>
</template>

<script>
import store from '../store';
import { create } from '../actions/pups';

export default {
  name: 'New',
  data() {
    return {
      formValues: {
        name: '',
        age: '',
        sex: '',
        color: '',
        breed: '',
        image_url: '',
        description: '',
      }
    };
  },

  methods: {
    submit() {
      store.dispatch(create(this.formValues)).then(() => {
        this.$router.push({ name: 'index' });
      });
    },
  },
};
</script>
