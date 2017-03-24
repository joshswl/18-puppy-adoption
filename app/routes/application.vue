<template lang="html">
  <div class="app">
    <nav class="nav">
      <div class="nav-left">
        <router-link to="" class="nav-item is-brand">
          <h2 class="nav-item is-brand">
            <router-link to="/" class="nav-item is-active">Puppies</router-link>
          </h2>
        </router-link>
      </div>
      <div class="nav-right nav-menu">
        <router-link to="/" class="nav-item">All Puppies</router-link>
        <router-link to="/new" class="nav-item">Add Puppy</router-link>
      </div>
    </nav>

    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-one-third">
            <div class="panel">
              <h2 class="panel-heading">Adopt a Pupper</h2>
              <div v-for="puppy in puppies" class="panel-block">
                <div class="media">
                  <div class="media-left">
                    <!-- <p class="image is-64x64">
                      <img :src="puppy.image_url" alt="">
                    </p>
                  </div>
                  <div class="media-right">
                    <h3 class="name">Mochi</h3>
                    <router-link to="/:id" class="a is-info">read more</router-link>
                  </div>
                </div>
              </div>
              <div class="panel-block">
                <div class="media">
                  <div class="media-left">
                    <p class="image is-64x64">
                      <img src="images/pit.jpg" alt="">
                    </p>
                  </div>
                  <div class="media-right">
                    <h3 class="name">Jack</h3>
                    <router-link to="/:id" to="/:id">read more</router-link> -->
                    <h3 class="name">{{puppy.name}}</h3>
                    <router-link :to="{ name: 'details', params: { id: puppy.id } }" class="button">read more</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-two-third">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store';
import { findAll } from '../actions/pups';

export default {
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
