<template>
  <div class="b-card">
    <div class="text-center">
      <h2 class="text-lg">{{ name }}</h2>
      <div class="text">{{ email }}</div>
      <div class="text">{{ phone }}</div>
      <button class="deleted-button btn" @click="remove">delete</button>
      <button class="change-button btn">change</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-list',
  props: ['id', 'name', 'email', 'phone'],
  data () {
    return {}
  },
  methods: {
    remove () {
      this.$emit('deleteContact', this.id)
    }
  }
}
</script>

<style>
.b-card {
  background-color: rgb(233, 240, 241);
  padding: 20px;
}
.text {
  font-family: "Raleway", sans-serif;
  font-size: 15px;
}
</style>
