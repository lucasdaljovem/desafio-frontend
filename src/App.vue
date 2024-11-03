<template>
  <v-app>
    <v-container fluid class="pa-0">
      <v-row>
        <!-- Coluna para o Formulário -->
        <v-col
          cols="12"
          md="4"
          class="pa-0 form-container"
        >
          <user-form />
        </v-col>

        <!-- Coluna para a Tabela -->
        <v-col
          cols="12"
          md="8"
          class="pa-0 table-container"
        >
          <user-table />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import UserForm from './components/UserForm.vue';
import UserTable from './components/UserTable.vue';

export default {
  components: {
    UserForm,
    UserTable,
  },
};
</script>

<style scoped>
.form-container {
  background-color: #01082d;
  height: 100%;
  color: white;
}

.table-container {
  background-color: white;
}
</style>
