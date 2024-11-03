<template>
  <v-container>
    <v-card class="pa-5 mt-5 table-card">
      <v-card-title>Lista de Usuários Cadastrados</v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="usuarios"
          class="elevation-1"
          disable-sort
        >
          <template v-slot:[`item.endereco`]="{ item }">
            {{ item.endereco.logradouro }}, {{ item.endereco.bairro }},
            {{ item.endereco.localidade }} - {{ item.endereco.uf }}
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { useUserStore } from '../stores/userStore';

export default {
  computed: {
    usuarios() {
      const userStore = useUserStore();
      return userStore.getUsuarios;
    },
  },
  data() {
    return {
      headers: [
        { text: 'Nome', value: 'nome' },
        { text: 'E-mail', value: 'email' },
        { text: 'CEP', value: 'cep' },
        { text: 'Origem', value: 'origem' },
        { text: 'Endereço', value: 'endereco' },
      ],
    };
  },
};
</script>

<style scoped>
.table-card {
  background-color: white;
}
</style>
