<template>
  <div class="container-fluid">
    <div class="container b-card">
      <p class="b-card__title">Add contacts</p>
      <input
        type="text"
        name="title"
        id="title"
        class="form-control"
        placeholder="Name"
      />
      <input
        type="text"
        name="body"
        id="body"
        class="form-control mt-3"
        placeholder="Email"
      />
      <input
        type="text"
        name="body"
        id="body"
        class="form-control mt-3"
        placeholder="Number"
      />
      <button type="submit" class="btn-add-task btn">
        Add contacts
      </button>
    </div>

    <div class="grid grid-cols-4 gap-4">
      <div
        v-for="person in users"
        :key="person.id"
        class="bg-white rounded-lg p-6 shadow"
      >
        <div class="text-center">
          <h2 class="text-lg">
            {{ person.name }}
          </h2>
          <div class="text-purple-500">{{ person.department }}</div>
          <div class="text-gray-600 text-sm">{{ person.email }}</div>
          <div class="text-gray-600 text-sm">{{ person.phone }}</div>
          <button class="deleted-button">delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-list',
  data () {
    return {
      users: []
    }
  },
  created () {
    fetch('http://localhost:3000/users')
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.users = data
      })
  }
}
</script>

<style></style>
