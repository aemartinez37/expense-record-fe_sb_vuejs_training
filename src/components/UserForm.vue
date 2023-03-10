<script setup lang="ts">
import { ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, email } from '@vuelidate/validators'
import ApiService from '@/services/ApiService'
import type { IUser } from '@/types'

const props = defineProps<{
  closeCreateUserForm: Function
}>()

const userFormInitialState = {
  userName: '',
  fullName: '',
  email: ''
}

const userFormState = ref({
  ...userFormInitialState
})

const rules = computed(() => ({
  userName: {
    required,
    minLength: minLength(5)
  },
  fullName: { required },
  email: { required, email }
}))

const v$ = useVuelidate(rules, userFormState)

async function submitNewuser() {
  const newUser: IUser = {
    username: userFormState.value.userName,
    full_name: userFormState.value.fullName,
    email: userFormState.value.email
  }

  await ApiService.createUser(newUser)
    .then((response) => {
      console.log(response)
      alert('User created!')
      props.closeCreateUserForm()
    })
    .catch((e: Error) => {
      alert(e)
    })
}
</script>

<template>
  <v-sheet width="500" class="mx-auto">
    <v-form validate-on="submit" @submit.prevent="submitNewuser">
      <v-text-field
        v-model="userFormState.userName"
        :error-messages="v$.userName.$errors.map((e) => e.$message.toString())"
        :counter="5"
        label="Username"
        required
        @input="v$.userName.$touch"
        @blur="v$.userName.$touch"
      ></v-text-field>

      <v-text-field
        v-model="userFormState.fullName"
        :error-messages="v$.fullName.$errors.map((e) => e.$message.toString())"
        label="Full Name"
        required
        @input="v$.userName.$touch"
        @blur="v$.userName.$touch"
      ></v-text-field>

      <v-text-field
        v-model="userFormState.email"
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
