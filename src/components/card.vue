<template>
  <div class="b-card">
    <div v-if="isVisible" class="text-center">
      <h2 class="text-lg">{{ name }}</h2>
      <div class="text">{{ email }}</div>
      <div class="text">{{ phone }}</div>
    </div>
    <div v-else class="container b-card__input">
      <input
        type="text"
        name="title"
        id="title"
        class="form-control"
        v-model="name"
        placeholder=""
      />
      <input
        type="text"
        name="body"
        class="form-control"
        v-model="email"
        placeholder=""
      />
      <input
        type="text"
        name="body"
        class="form-control"
        v-model="phone"
        placeholder=""
      />
    </div>
    <div class="card-btn">
      <button class="deleted-button btn" @click="remove">delete</button>
      <button class="change-button btn" @click="isVisible = !isVisible">
        change
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-list',
  props: ['id', 'name', 'email', 'phone'],
  data () {
    return {
      isVisible: true
    }
  },
  methods: {
    remove () {
      this.$emit('deleteContact', this.id)
    },
    changeCard () {}
  }
}
</script>

<style>
.b-card {
  background-color: rgb(233, 240, 241);
  padding: 40px 20px;
}
.text {
  font-family: "Raleway", sans-serif;
  font-size: 15px;
}
.card-btn {
  text-align: center;
}
.form-control {
  background: rgba(0, 0, 0, 0);
  font-family: "Raleway", sans-serif;
  font-size: 15px;
}
</style>
