<script lang="ts">
import LoginForm from '../components/LoginForm.vue'
import ModalOverlay from '../components/ModalOverlay.vue'

export default {
  data() {
    return {
      showCreateUserForm: false
    }
  },
  methods: {
    openCreateUserForm() {
      this.showCreateUserForm = true
    },
    closeCreateUserForm() {
      this.showCreateUserForm = false
    }
  },
  components: {
    LoginForm,
    ModalOverlay
  }
}
</script>

<template>
  <br />
  <LoginForm :open-create-user-form="openCreateUserForm"></LoginForm>
  <ModalOverlay v-model="showCreateUserForm" title="New User">
    <template v-slot:modal-content>
      <h1>Hello World!: Create user form</h1>
    </template>
  </ModalOverlay>
</template>
