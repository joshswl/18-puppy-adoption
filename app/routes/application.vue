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
              <div class="panel-block">
                <div class="media">
                  <div class="media-left">
                    <p class="image is-64x64">
                      <img src="images/mochie.jpg" alt="">
                    </p>
                  </div>
                  <div class="media-right">
                    <h3 class="name">Mochie</h3>
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
                    <router-link to="/:id" to="/:id">read more</router-link>
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
export default {
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
