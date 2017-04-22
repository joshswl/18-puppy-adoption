<template lang="html">
  <div class="app__new">
    <h2 class="title">Found a Pupper? We can help!</h2>
    <form action="">
      <p class="control">
        <label for="pup-name" class="label">Name</label>
        <input type="text" class="input">
      </p>
      <p class="control">
        <label for="pup-age" class="label">Age</label>
        <input type="text" class="input">
      </p>
      <p class="control">
        <label for="pup-sex" class="label">Sex</label>
        <span class="select">
          <select>
            <option>Please Select an Option</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </span>
      </p>
      <p class="control">
        <label for="pup-color" class="label">Color</label>
        <input type="text" class="input">
      </p>
      <p class="control">
        <label for="putp-breed" class="label">Breed</label>
        <input type="text" class="input">
      </p>
      <p class="control">
        <label for="pup-image" class="label">Image URL</label>
        <input type="text" v-model="formValues.image-url" class="input">
      </p>
      <p class="control">
        <label for="pup-description" class="label">Description</label>
        <textarea type="text" class="input"></textarea>
      </p>
      <p class="control">
        <a href="/" class="button">Back</a>
        <button class="button is-info">Submit</button>
      </p>
    </form>
  </div>
</template>

<script>
import store from '../store';
import { create } from '../actions/pups';

export default {
  data() {
    return {
      formValues: {
        name: '',
        age: '',
        sex: '',
        color: '',
        breed: '',
        'image-url': '',
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
