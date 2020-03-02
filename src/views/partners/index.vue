<template lang="pug">
    section.partners.page__inner
        .djelato__title-block
            h3.djelato__title Наши партнеры
        .partners__wrap
            .container
                .partners__block(v-if="partners")
                    .partners__item(v-for="item in partners")
                        .partners__img(:style="`background-image:url(http://timentys.kz/storage/${item.logotype});`")
                        .partners__txt
                            p.partners__title {{item.title}}
                            p.partners__desc {{item.description}}
                            a(:href="item.link").partners__link.
                                Перейти на сайт

        .materials__question(v-if="question_person")
            .container
                h3.sub-title.txt-align-center.materials__question-title.
                    По всем вопросам о партнерстве
                .materials__question-wrap
                    .materials__question-block
                        .materials__question-img-block
                            .team__img-wrap.materials__question-img-wrap
                                .team__img.materials__question-img(:style="`background-image:url(http://timentys.kz/storage/${question_person.photo});`")
                        .materials__question-txt
                            .materials__question-person
                                p.materials__question-name {{question_person.fullName}}
                                p.materials__question-position {{question_person.position}}
                            p.materials__question-desc.
                                Отвечу на любые вопросы о взаимовыгодном сотрудничестве. Мои контакты: + 7 777 77 77 777 (WhatsApp)
                            p.materials__question-desc.
                                Звонки принимаются с 9:00 до 17:00 по будням
                            a(:href="'tel:' + question_person.phone").btn--orange.materials__question-btn.
                                Позвонить
                            //-a(href="#").btn--orange.materials__question-btn.
                                Перезвоните мне
</template>

<script>
import { getPartners, getContactInfo } from '@/api/about'

export default {
    data() {
        return {
            partners: [],
            question_person: '',
        }
    },
    created() {
        getPartners().then(response => {
            if (!response.data.errors.length) {
                this.partners = response.data.payload
            } else {
                console.log('Error', response.data.errors)
            }
        }).catch(error => {
            console.log(error)
        })

        getContactInfo().then(response => {
            if (!response.data.errors.length) {
                this.question_person = response.data.payload
                console.log('question_person', response.data.payload)
            } else {
                console.log('Error', response.data.errors)
            }
        }).catch(error => {
            console.log(error)
        })
    }
    
}
</script>