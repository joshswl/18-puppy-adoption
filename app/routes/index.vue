<template lang="html">
  <div class="app__index">
    <div class="level">
      <div class="level-left">
        <h1 class="title level-item">Puppies for Adoption</h1>
      </div>
      <div class="level-right">
        <router-link to="/new" class="button level-item is-info">Add a Pupper</router-link>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="puppy in puppies.filter((p) => p.adopted === false)">
          <td>{{ puppy.name }}</td>
          <td>{{ puppy.age }}</td>
          <td><router-link :to="{ name: 'detail', params: { id: puppy.id } }">Read More</router-link></td>
        </tr>
      </tbody>
    </table>
    <div class="level">
      <div class="level-left">
        <h1 class="title level-item">Adopted Puppers</h1>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="puppy in puppies.filter((p) => p.adopted === true)">
          <td>{{ puppy.name }}</td>
          <td>{{ puppy.age }}</td>
          <td><router-link :to="{ name: 'detail', params: { id: puppy.id } }">Read More</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script
import store from '../store';
import { findAll } from '../actions/puppy';

export default {
  data() {
    return {
      puppies: this.$select('puppies'),
    };
  },

  created() {
    store.dispatch(findAll());
  },

  methods: {

  },
};
</script>



