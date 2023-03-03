<script lang="ts">
export default {
  props: {
    addExpense: { type: Function },
    quit: { type: Function }
  },
  data() {
    return {
      description: '',
      amount: 0
    }
  }
}
</script>

<template>
  <div class="expenseForm">
    <v-text-field v-model="description" label="Description" />
    <v-text-field label="Amount" v-model="amount" prefix="$"></v-text-field>
    <v-btn @click="quit!()" color="error"> Cancel </v-btn>
    <v-btn
      @click="addExpense!(description, amount)"
      :disabled="!description || amount <= 0"
      color="success"
    >
      Add Expense
    </v-btn>
  </div>
</template>

<style scoped>
div .expenseForm {
  width: 500px;
  margin: 7px;
  text-align: center;
}

button {
  margin-right: 7px;
}
</style>
