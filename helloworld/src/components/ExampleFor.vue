    <template>
    <div>
        <ul>
            <li v-for="country in countries" v-bind:key="country.code"> {{ country.name }}</li>
        </ul>
    </div>
    </template>
    
    <script lang="ts" setup>
        import { ref, Ref } from "vue";
        interface ICountry{
            code: string,
            name: string
        }
        let countries:Ref<Array<ICountry>> = ref([
                {
                    code: 'es',
                    name: 'Spain'
                },
                {
                    code: 'en',
                    name: 'UK'
                },
                {
                    code: 'it',
                    name: 'Italia'
                },
                {
                    code: 'pt',
                    name: 'Portugal'
                },
                {
                    code: 'co',
                    name: 'Colombia'
                }
        ])
    </script> 
    
    <style>
    
    </style>
    