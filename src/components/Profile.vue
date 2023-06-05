<template>
    <div class="container">
      <header class="jumbotron">
        <h3>
          <strong>{{currentUser.isAlreadyExist}}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong>
        {{currentUser.token.substring(0, 20)}} ... {{currentUser.token.substr(currentUser.token.length - 20)}}
      </p>
      <p>
        <strong>Id:</strong>
        {{currentUser.isAlreadyExist}}
      </p>
      <p>
        <strong>Email:</strong>
        {{currentUser.isAlreadyExist}}
      </p>
      <strong>Authorities:</strong>
      <!-- <ul>
        <li v-for="role in currentUser.roles" :key="role">{{role}}</li>
      </ul> -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProfileComponent',
    computed: {
      currentUser() {
        return this.$store.state.auth.user;
      }
    },
    mounted() {
      if (!this.currentUser) {
        this.$router.push('/login');
      }
    }
  };
  </script>