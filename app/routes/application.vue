<template lang="html">
  <div class="app">
    <nav class="nav">
      <div class="nav-left">
        <a href="" class="nav-item is-brand">
          <h2 class="nav-item is-brand">
            <a href="/" class="nav-item is-active">Puppies</a>
          </h2>
        </a>
      </div>
      <div class="nav-right nav-menu">
        <a href="/" class="nav-item">All Puppies</a>
        <a href="/new" class="nav-item">Add Puppy</a>
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
                    <a href="/detail(id)" class="button">Read More</a>
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
                    <a href="/detail(id)" class="button">Read More</a>
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
