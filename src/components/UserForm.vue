<template>
  <v-container>
    <v-card class="pa-5 form-card">
      <v-card-title class="white--text text-center">Cadastro de Usuário</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="cadastrarUsuario">
          <v-text-field
            label="Nome"
            v-model="nome"
            outlined
            required
            class="input-white"
          />
          <v-text-field
            label="E-mail"
            v-model="email"
            outlined
            required
            class="input-white"
          />
          <!--formatarCep vai deixar o cep no padrão de 000000-000 -->
          <v-text-field
            label="CEP"
            v-model="cep"
            outlined
            @input="formatarCEP"  
            @blur="buscarEndereco"
            required
            class="input-white"
          />
          <v-text-field
            label="Endereço"
            v-model="endereco.logradouro"
            outlined
            disabled
            class="input-white"
          />
          <v-text-field
            label="Bairro"
            v-model="endereco.bairro"
            outlined
            disabled
            class="input-white"
          />
          <v-row>
            <v-col cols="7">
              <v-text-field
                label="Cidade"
                v-model="endereco.localidade"
                outlined
                disabled
                class="input-white"
              />
            </v-col>
            <v-col cols="5">
              <v-text-field
                label="Estado"
                v-model="endereco.uf"
                outlined
                disabled
                class="input-white"
              />
            </v-col>
          </v-row>
          <v-select
            label="Origem"
            v-model="origem"
            :items="['Digital', 'Físico']"
            outlined
            required
            class="input-white"
          />
          <v-btn type="submit" color="primary" class="mt-4" block>
            Cadastrar
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';
import { useUserStore } from '../stores/userStore';

export default {
  data() {
    return {
      nome: '',
      email: '',
      cep: '',
      origem: '',
      endereco: {
        logradouro: '',
        bairro: '',
        localidade: '',
        uf: '',
      },
    };
  },
  methods: {
    // Método para formatar o CEP
    formatarCEP() {
      // Remove todos os caracteres que não são números
      let cepNumeros = this.cep.replace(/\D/g, '');
      // Aplica a máscara XXXXX-XXX
      if (cepNumeros.length > 5) {
        cepNumeros = cepNumeros.replace(/^(\d{5})(\d)/, '$1-$2');
      }
      this.cep = cepNumeros;
    },
    async buscarEndereco() {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${this.cep.replace('-', '')}/json/`);
        if (response.data.erro) {
          alert('CEP não encontrado');
        } else {
          this.endereco = response.data;
        }
      } catch (error) {
        alert('Erro ao buscar o endereço');
      }
    },
    cadastrarUsuario() {
      const userStore = useUserStore();
      userStore.cadastrarUsuario({
        nome: this.nome,
        email: this.email,
        cep: this.cep,
        origem: this.origem,
        endereco: this.endereco,
      });
      this.limparFormulario();
    },
    limparFormulario() {
      this.nome = '';
      this.email = '';
      this.cep = '';
      this.origem = '';
      this.endereco = {
        logradouro: '',
        bairro: '',
        localidade: '',
        uf: '',
      };
    },
  },
};
</script>

<style scoped>
.form-card {
  background-color: #01082d;
  color: white;
  height: 100%;
}

/* Estilo para campos de entrada com fundo branco */
.input-white .v-input__control .v-input__slot {
  background-color: white !important;
}

/* Centralizar o título */
.text-center {
  text-align: center;
}
</style>
