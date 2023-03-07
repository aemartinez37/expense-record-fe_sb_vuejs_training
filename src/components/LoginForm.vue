<script lang="ts">
import ApiService from '@/services/ApiService'

export default {
  props: {
    openCreateUserForm: { type: Function, required: true }
  },
  data: () => ({
    userName: ''
  }),
  methods: {
    async submitLogin() {
      await ApiService.getUser(this.userName)
        .then((response) => {
          console.log(response)
          this.$router.push({ path: 'home' })
        })
        .catch((e: Error) => {
          console.log(e)
          this.openCreateUserForm()
        })
    }
  }
}
</script>

<template>
  <v-sheet width="300" class="mx-auto">
    <h1>Welcome!</h1>
    <br />
    <v-form validate-on="submit" @submit.prevent="submitLogin">
      <v-text-field v-model="userName" label="Username"></v-text-field>
      <v-btn type="submit" block class="mt-2" :disabled="!userName" color="success">Login</v-btn>
    </v-form>
  </v-sheet>
</template>
