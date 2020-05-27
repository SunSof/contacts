<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="person in users" :key="person.id">
        <td>{{person.name}}</td>
        <td>{{person.phone}}</td>
        <td>{{person.email}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "simple-list",
  data() {
    return {
      users: []
    };
  },
  created() {
    fetch(" http://localhost:3000/users")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.users = data;
      });
  }
};
</script>

<style>
</style>