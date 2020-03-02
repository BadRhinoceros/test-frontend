<template lang="pug">
    <router-view :key="key"></router-view>
</template>
<script>
export default {
    name: 'AppMain',
    computed: {
        key() {
            return this.$route.fullPath
        }
    }
}
</script>