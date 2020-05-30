<template>
  <div class="container-fluid">
    <div class="container b-add-card">
      <p class="b-add-card__title">Add contacts</p>
      <input
        type="text"
        name="title"
        id="title"
        class="form-control"
        placeholder="Name"
        v-model="newContacts.name"
      />
      <input
        type="text"
        name="body"
        class="form-control mt-3"
        placeholder="Email"
        v-model="newContacts.email"
      />
      <input
        type="text"
        name="body"
        class="form-control mt-3"
        placeholder="Number"
        v-model="newContacts.phone"
      />
      <button type="submit" class="btn-add-contacts btn" @click="addContacts()">
        Add contacts
      </button>
    </div>
    <div class="grid grid-cols-4 gap-4">
      <card
        v-for="(person, index) in users"
        :key="index"
        v-bind:id="person.id"
        v-bind:name="person.name"
        v-bind:email="person.email"
        v-bind:phone="person.phone"
        @deleteContact="deleteContact(index)"
      ></card>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  name: 'card-list',
  data () {
    return {
      users: {},
      newContacts: {
        id: Math.random(),
        name: '',
        email: '',
        phone: ''
      }
    }
  },
  components: {
    card
  },
  created () {
    fetch('http://localhost:3000/contacts')
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.users = data
      })
  },
  methods: {
    addContacts () {
      if (this.users.name !== '') {
        this.users.push({
          name: this.newContacts.name,
          email: this.newContacts.email,
          phone: this.newContacts.phone
        })
      }
    },
    deleteContact (index) {
      this.users.splice(index, 1)
    }
  }
}
</script>

<style>
.b-add-card {
  background-color: rgb(233, 240, 241);
  margin-top: 60px;
  padding: 20px;
  margin-bottom: 60px;
  font-family: "Raleway", sans-serif;
  font-size: 20px;
}
.b-add-card__title {
  font-size: 30px;
  text-align: center;
}
.btn {
  margin-top: 10px;
  background-color: rgb(122, 206, 236);
  font-family: "Raleway", sans-serif;
  margin-right: 10px;
}
</style>
