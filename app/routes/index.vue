<template lang="html">
  <div class="app__index">
    <div class="level">
      <div class="level-left">
        <h1 class="title level-item">Puppies for Adoption</h1>
      </div>
      <div class="level-right">
        <router-link :to="{ name: 'new' }" class="button level-item is-info">Add a Pupper</router-link>
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
        <tr v-if="!puppy.adopted" v-for="puppy in pups">
          <td>{{ puppy.name }}</td>
          <td>{{ puppy.age }}</td>
          <td><router-link :to="{ name: 'details', params: { id: puppy.id } }">Read More</router-link></td>
        </tr>
      </tbody>
    </table>
    <div class="level">
      <div class="level-left">
        <h1 class="title level-item">Adopted Puppies</h1>
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
        <tr v-if="puppy.adopted" v-for="puppy in puppies">
          <td>{{ pups.name }}</td>
          <td>{{ pups.age }}</td>
          <td><router-link :to="{ name: 'details', params: { id: puppy.id } }">Read More</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import store from '../store';
import { findAll } from '../actions/pups';

export default {
  name: 'Index',
  data() {
    return {
      pups: this.$select('pups'),
    };
  },

  created() {
    store.dispatch(findAll());
  },

  methods: {

  },
};
</script>
