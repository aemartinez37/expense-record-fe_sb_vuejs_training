<script lang="ts">
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'
import ApiService from '@/services/ApiService'
import type { IUser } from '@/types'

export default {
  props: {
    closeCreateUserForm: { type: Function, required: true }
  },
  setup() {
    const initialState = {
      userName: '',
      fullName: '',
      email: ''
    }

    const state = reactive({
      ...initialState
    })

    const rules = {
      userName: { required },
      fullName: { required },
      email: { required, email }
    }

    const v$ = useVuelidate(rules, state)

    return { state, v$ }
  },
  methods: {
    async submitNewuser() {
      const newUser: IUser = {
        username: this.state.userName,
        full_name: this.state.fullName,
        email: this.state.email
      }

      await ApiService.createUser(newUser)
        .then((response) => {
          console.log(response)
          alert('User created!')
          this.closeCreateUserForm()
        })
        .catch((e: Error) => {
          alert(e)
        })
    }
  }
}
</script>

<template>
  <v-sheet width="300" class="mx-auto">
    <v-form validate-on="submit" @submit.prevent="submitNewuser">
      <v-text-field
        v-model="state.userName"
        :error-messages="v$.userName.$errors.map((e) => e.$message.toString())"
        :counter="10"
        label="Username"
        required
        @input="v$.userName.$touch"
        @blur="v$.userName.$touch"
      ></v-text-field>

      <v-text-field
        v-model="state.fullName"
        :error-messages="v$.fullName.$errors.map((e) => e.$message.toString())"
        label="Full Name"
        required
        @input="v$.userName.$touch"
        @blur="v$.userName.$touch"
      ></v-text-field>

      <v-text-field
        v-model="state.email"
        :error-messages="v$.email.$errors.map((e) => e.$message.toString())"
        label="E-mail"
        required
        @input="v$.email.$touch"
        @blur="v$.email.$touch"
      ></v-text-field>
      <br />
      <v-btn type="submit" block class="mt-2" color="success">Create User</v-btn>
    </v-form>
  </v-sheet>
</template>
