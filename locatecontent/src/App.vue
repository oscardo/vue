    <template>
    <div>
      <select v-model="$i18n.locale">
        <option v-for="locale in $i18n.availableLocales" :key='`locale-${locale}`' :value="locale">{{locale}}</option>
      </select>
      <h1>{{ $t("message.hello", {name: username, surname: lastname}) }} </h1>
      <p> {{ $t("message.content") }} </p>
      <p> {{ $t("message.products", {count: 5}) }} </p>
      <p> {{ $t("message.products", {count: 0}) }} </p>
      <p> {{ $t("message.products", {count: 1}) }} </p>
      <p> {{ $t("message.comment", {comment: 9}) }} </p>
    </div>
    </template>
    
    <script lang="ts" setup>
    import { ref } from 'vue';
    const username = ref('Oscardo')
    const lastname = ref('Ortiz')
    </script>