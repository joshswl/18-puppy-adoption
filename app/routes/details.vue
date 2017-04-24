<template lang="html">
  <div class="">
    <div v-if="currentPuppy">
      <h2 class="title has-text-centered">
        {{ currentPuppy.name }}
        <a @click="adoptMe" href="#" class="button is-primary" v-bind:class="{'is-success': currentPuppy.adopted }">
          <span><i class="fa fa-paw fa-fw" aria-hidden="true"></i></span>
          <span v-if="currentPuppy.adopted">I'm Adopted!</span>
          <span v-else>Adopt Me!</span>
        </a>
      </h2>
      <div class="columns">
        <figure class="column is-half is-offset-one-quarter">
          <img v-bind:src="currentPuppy.image_url" alt="">
        </figure>
      </div>
    </div>
    <nav class="level is-mobile">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Age</p>
          <p class="title">{{currentPuppy.age}}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Breed</p>
          <p class="title">{{currentPuppy.breed}}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Color</p>
          <p class="title">{{currentPuppy.color}}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Sex</p>
          <p class="title">{{currentPuppy.sex}}</p>
        </div>
      </div>
    </nav>
    <div class="card is-fullwidth">
      <div class="card-content">
        <h3 class="subtitle">About Me</h3>
        <p>{{currentPuppy.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store';
import { findOne, toggleAdopted } from '../actions/pups';

export default {
  name: 'Details',
  data() {
    return {
      currentPuppy: null,
      pups: this.$select('pups'),

    };
  },

  watch: {
    pups: 'getPuppy',
    '$route.params.id': 'getPuppy',
  },

  methods: {
    getPuppy() {
      this.currentPuppy = this.pups.find(puppy => puppy.id == this.$route.params.id);
    },

    adoptMe() {
      store.dispatch(toggleAdopted(this.currentPuppy));
    }
  },
};
</script>
