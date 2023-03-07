<script lang="ts">
import Datepicker from 'vue3-datepicker'
export default {
  props: {
    addExpense: { type: Function, required: true },
    quit: { type: Function, required: true }
  },
  data() {
    return {
      datePicked: new Date(),
      description: '',
      amount: 0
    }
  },
  components: {
    Datepicker
  },
  methods: {
    toUppercase() {
      this.description = this.description.toUpperCase()
    }
  }
}
</script>

<template>
  <div class="expense-form">
    <div class="expense-form--date">Date: <Datepicker v-model="datePicked" /></div>
    <v-text-field v-model="description" @keyup="toUppercase" type="text" label="Description" />
    <v-text-field v-model="amount" type="number" label="Amount" prefix="$"></v-text-field>
    <v-btn @click="quit()" color="error"> Cancel </v-btn>
    <v-btn
      @click="addExpense(datePicked, description, amount)"
      :disabled="!description || amount <= 0"
      color="success"
    >
      Add Expense
    </v-btn>
  </div>
</template>

<style scoped>
div .expense-form {
  width: 500px;
  margin: 25px 15px;
  text-align: center;
}

div .expense-form--date {
  display: flex;
  gap: 10px;
  margin: 5px 5px 15px;
}

button {
  margin-right: 7px;
}
</style>
