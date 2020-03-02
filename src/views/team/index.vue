<template lang="pug">
    section.team.page__inner
        .container
            .djelato__title-block
                h3.djelato__title Наша команда
            .team__wrap(v-if="team")
                .team__item(v-for="item in team")
                    .team__img-wrap
                        .team__img(:style="`background-image:url(http://timentys.kz/storage/${item.photo});`")
                    .team__txt-block
                        p.team__name {{item.name}}
                        p.team__position {{item.position}}
                        p.team__desc {{item.description}}

</template>
<script>
import { getTeam } from '@/api/about'

export default {
    data() {
        return{
            lol: 'LOL',
            team: ''
        }
    },
    created() {
        getTeam().then(response => {
            if (!response.data.errors.length) {
                this.team = response.data.payload
                console.log('team', response.data.payload)
            } else {
                console.log('Error')
            }
        }).catch(error => {
            console.log(error)
        })
    }
}
</script>