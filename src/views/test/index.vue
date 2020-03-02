<template lang="pug">
    div
        p {{ str }}
        button(@click="testClick") click_lol
</template>

<script>


import { testRequest } from '@/api/test'

export default {
    name: 'test_index',
    data() {
        return {
            str: 'lol'
        }
    },
    methods: {
        testClick() {
            this.str = "дыва"
            console.log('Lol')
            testRequest()
        }
    }
}
</script>
