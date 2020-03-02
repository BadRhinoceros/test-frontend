<template lang="pug">
    footer(role="contentinfo")
        .container
            .footer__wrapper
                .footer__items
                    .footer__main Для бизнеса
                    .footer__items--text
                        a.footer__items--text(href="#") Франшиза
                        a.footer__items--text(href="#") HoReCa
                        a.footer__items--text(href="#") Сырье для производства
                .footer__items
                    .footer__main О компании
                    .footer__items--text
                        a.footer__items--text(href="#") Сертификаты
                        <router-link class="footer__items--text" to="/team">Команда</router-link>
                        a.footer__items--text(href="#") История
                        <router-link class="footer__items--text" to="/partners">Партнеры</router-link>
                .footer__items
                    .footer__main Сырье для производства
                    .footer__items--text
                        a.footer__items--text(href="#") Топпинги
                        a.footer__items--text(href="#") Смеси для мягкого мороженного
                        a.footer__items--text(href="#") Смеси для приготовления джелато
                .footer__items
                    .footer__main Заказать
                    .footer__items--text
                        a.footer__items--text(href="#") Торты из мороженного
                        a.footer__items--text(href="#") Мороженное в баночках
                        a.footer__items--text(href="#") Выездное обслуживание
                        a.footer__items--text(href="#") Описание сортов

            .footer__icons--wrapper
                .footer__icons--items
                    .footer__icons(:style="`background-image:url(${require('@/assets/images/icons/facebook.png')});`")
                    a.footer__icons--text(href="#") Facebook
                .footer__icons--items
                    .footer__icons(:style="`background-image:url(${require('@/assets/images/icons/instagram.png')});`")
                    a.footer__icons--text(href="#") Instagram

            .footer__text--wrapper
                .footer__text--items
                    p © 2020 Tutto Bene. Все права защищены.
                .footer__text--items
                    p Политика конфиденциальности
                    p Условия использования
</template>
<script>
export default {
    name: 'FooterMenu',
    props: ['footerData'],
}
</script>