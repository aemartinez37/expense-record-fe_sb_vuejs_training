<script lang="ts">
import LoginForm from '../components/LoginForm.vue'
import UserForm from '../components/UserForm.vue'
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
    UserForm,
    ModalOverlay
  }
}
</script>

<template>
  <br />
  <LoginForm :open-create-user-form="openCreateUserForm"></LoginForm>
  <ModalOverlay v-model="showCreateUserForm" title="New User">
    <template v-slot:modal-content>
      <UserForm :close-create-user-form="closeCreateUserForm" />
    </template>
  </ModalOverlay>
</template>
