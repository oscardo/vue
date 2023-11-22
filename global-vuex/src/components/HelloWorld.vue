    <template>
    <div>
      <h2>Contador</h2>
      <h3>{{ counter}} x 2 = {{ times2 }}</h3>
      <button @click="increment">Sumar</button>
    </div>
    </template>
    
    <script lang="ts" setup>
    import { computed } from 'vue';
    import { useStore } from 'vuex'
        const store = useStore(); //this.$store
        const counter = computed(() => store.state.counter )
        const times2 = computed(() => store.getters.times2 )
        const increment = () => store.commit('setCounter', counter.value + 1)
    </script>
