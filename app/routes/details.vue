<template lang="html">
  <div class="app__details">
    <div class="pup-details">
      <h2 class="title has-text-centered">
        Mochi
        <span class="button is-success"><i class="fa fa-paw fa-fw" aria-hidden="true"></i> I'm Adopted!</span>
      </h2>
      <div class="columns">
        <figure class="column is-half is-offset-one-quarter">
          <img src="http://placecage.com/400/400" alt="">
        </figure>
      </div>
      <div class="level is-mobile">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Age</p>
            <p class="title">3 Months</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Breed</p>
            <p class="title">Maltese Mix</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Color</p>
            <p class="title">Snow White</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Sex</p>
            <p class="title">Male</p>
          </div>
        </div>
      </div>
      <article class="message">
        <div class="message-body">
          <h3 class="subtitle">About Me</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <strong>Pellentesque risus mi</strong>
          , tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
          <a>felis venenatis</a>
          efficitur. Aenean ac
          <em>eleifend lacus</em>
          , in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
        </div>
      </article>
    </div>
  </div>
</template>

<script>
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

  },
};
</script>
