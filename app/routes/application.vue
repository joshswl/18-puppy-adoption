<template lang="html">
  <div class="app">
    <nav class="nav">
      <div class="nav-left">
        <router-link to="" class="nav-item is-brand">
          <h2 class="nav-item is-brand">
            <router-link :to="{ name: 'index' }" class="nav-item is-active">Puppies</router-link>
          </h2>
        </router-link>
      </div>
      <div class="nav-right nav-menu">
        <router-link :to="{ name: 'index' }" class="nav-item">All Puppies</router-link>
        <router-link :to="{ name: 'new' }" class="nav-item">Add Puppy</router-link>
      </div>
    </nav>

    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-one-third">
            <div class="panel">
              <h2 class="panel-heading">Adopt a Pupper</h2>
              <div v-for="puppy in pups" class="panel-block">
                <div class="media">
                  <figure class="media-left">
                    <p class="image is-64x64">
                      <img :src="puppy.image_url" alt="">
                    </p>
                  </figure>
                  <div class="media-right">
                    <div>{{puppy.name}}</div>
                    <router-link :to="{ name: 'details', params: { id: puppy.id } }" class="button"><small>Read more</small></router-link>
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
