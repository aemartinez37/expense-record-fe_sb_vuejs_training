<script lang="ts">
import ExpenseForm from '../components/ExpenseForm.vue'

interface IExpense {
  date: Date
  desc: string
  amount: number
}

export default {
  data() {
    return {
      expenses: [] as IExpense[],
      showExpenseForm: false
    }
  },
  methods: {
    newExpense(desc: string, amount: number) {
      this.expenses.push({ date: new Date(), desc, amount })
      this.showExpenseForm = false
    },
    closeExpenseForm() {
      this.showExpenseForm = false
    }
  },
  components: {
    ExpenseForm
  }
}
</script>

<template>
  <br />
  <div v-if="expenses.length === 0">
    No expenses have been recorded
    <v-divider />
  </div>
  <div class="expensesTab" v-else>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Date</th>
          <th class="text-left">Desc.</th>
          <th class="text-left">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in expenses" :key="index">
          <td>{{ item.date.toLocaleDateString('en-US') }}</td>
          <td>{{ item.desc.toUpperCase() }}</td>
          <td>${{ item.amount }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>

  <v-overlay v-model="showExpenseForm">
    <v-card class="pa-2">
      <ExpenseForm :add-expense="newExpense" :quit="closeExpenseForm" />
    </v-card>
  </v-overlay>

  <v-btn
    @click="showExpenseForm = true"
    class="newExpenseBtn"
    color="success"
    icon="mdi-plus"
    size="x-large"
  />
</template>

<style scoped>
.newExpenseBtn {
  position: absolute;
  bottom: 50px;
  right: 50px;
}

.expensesTab {
  width: 600px;
  margin: auto;
}
</style>
