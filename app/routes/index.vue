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
        <tr>
          <td>Mochi</td>
          <td>6 months</td>
          <td><router-link to="/:id" class="a is-info">read more</router-link></td>
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
        <tr>
          <td>Taken Pup #1</td>
          <td>9 Months</td>
          <td><router-link to="/:id" class="a is-info">read more</router-link></td>
        </tr>
        <tr>
          <td>Taken Pup #2</td>
          <td>11 weeks</td>
          <td><router-link to="/:id" class="a is-info">read more</router-link></td>
        </tr>
      </tbody>
    </table>
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
