<template lang="pug">
    .layout.no-scroll
        <header-menu :header-data="header_data"/>
        main.page-content
            <app-main></app-main>
        <footer-menu :footer-data="footer_data"/>
</template>
<script>

import AppMain from '../layout/components/AppMain'
import HeaderMenu from '../layout/components/HeaderMenu'
import FooterMenu from '../layout/components/FooterMenu'

// import { getLayoutData } from '@/api/layout'

export default {
    name: 'layout',
    components: {
      AppMain,
      HeaderMenu,
      FooterMenu
    },
    data() {
        return {
            header_data: '',
            footer_data: '',
        }
    },
    created() {
        // getLayoutData().then(response => {
        //     if (!response.errors) {
        //         let data = response.data.data

        //         this.header_data = {
        //             nav: data.header.nav,
        //             graphic: data.header.graphic
        //         }
                
        //         this.footer_data = {
        //             nav: data.footer.nav,
        //             soc_links: data.other.links_to_social_networks
        //         }
        //     } else {
        //         console.log('Ого, ошибка')
        //     }
        // }).catch(error => {
        //     console.log(error)
        // })
    }
}
</script>