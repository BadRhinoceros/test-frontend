<template lang="pug">
	header.header(role="head")
		.header__wrapper.header__desktop(:class="{'header__wrapper-main': is_main}")
			.header__logo
				a(href="/")
					.header__logo--img
				
			<div class="header__links">
				<div class="header__links--wrapper">
					<a class="header__links--item header__main-link header__main-link-simple active" href="#">Где нас найти</a>
					<a class="header__links--item header__main-link header__main-link-simple" href="#">О нас
						<div class="header__subtitle-block">
							<a class="header__subtitle-link" href="#">История</a>
							<router-link class="header__subtitle-link" to="/team">Команда</router-link>
							<router-link class="header__subtitle-link" to="/partners">Партнеры</router-link>
							<router-link class="header__subtitle-link" to="/certifications">Сертификаты</router-link>							
						</div>
					</a>
					<router-link class="header__links--item header__main-link header__main-link-simple" to="/about_djelato">О джелато</router-link>
					a.header__links--item.header__main-link(href="#" :class="{'header__main-link-simple': is_main}").header__order-link
						| Заказать
						<div class="header__subtitle-block">
							<a class="header__subtitle-link" href="#">Торт-мороженное</a>
							<a class="header__subtitle-link" href="#">Мороженное в баночках</a>
							<a class="header__subtitle-link" href="#">Выездное обслуживание</a>
							<a class="header__subtitle-link" href="#">Описание сортов</a>
						</div>  
				</div>
				<div class="header__links--wrapper">
					<router-link class="header__links--item header__main-link" to="/materials">Сырьё для производства</router-link>
					<router-link class="header__links--item header__main-link" to="/franchise">Франшиза</router-link>
					<a class="header__links--item header__main-link" href="#">Для HoReCa</a>
				</div>
			</div>

			.header__contacts
				.header__contacts-block
					.header__contacts--txt
						p.header__contacts-desctop.
							Наведите, чтобы узнать график
						p.header__subnumber-title.header__contacts-mobile.
							Заказать доставку
					a(href="tel:+77077777777").header__contacts--number.
						+ 7 (707) 777-77-77
				.header__contacts-hide
					.header__subnumber-block                 
						p.header__subnumber-title.
							Главный офис
						a(href="tel:+77272777777").header__contacts--number.header__subnumber.
							+ 7 (727) 277-77-77
					.header__subnumber-block.header__clock-block
						.header__schedule
							.header__schedule-img
							.header__schedule-txt
								p.header__schedule-time.
									10:00-19:00
								p.header__schedule-desc.
									Сб-Вс выходной

		.header__mobile
			.container.relative
				.header__mobile-fixed-wrap
					button.header__burger-btn(@click.prevent="openMobileMenu")
					.header__logo--img

			.header__mobile-wrap(
				v-show="mobile_menu_active"
				@click="closeMobilMenu"
			)
			.header__mobile-block(:class="{'active': mobile_menu_active}")
				.header__mobile-menu-wrap
					
					a(href="#").btn--orange.header__mobile-menu-btn.
						+7 (777) 77 77 777
					.header__menu-links
						a(href="#") Где нас найти
						a(href="#") О компании
						a(href="#") О джелато
						a(href="#") Заказать
					.header__menu-links
						p.header__menu-title Для бизнеса
						a(href="#") Франшиза
						a(href="#") HoReCa
						a(href="#") Сырье для производства
					a(href="#").header__whatsapp-icon

</template>
<script>
export default {
	name: 'HeaderMenu',
	props: ['headerData'],
	data() {
		return {
			mobile_menu_active: false,
			is_main: true
		}
	},
	created() {
		// Считать только в том случае, если это мобилка
		let path = this.$router.history.current.path

		if (path === '/' || path === '') {
			this.is_main = true
		} else {
			this.is_main = false
		}
	},
	watch: {
		'$route': function () {
			// Считать только в том случае, если это мобилка
			let path = this.$router.history.current.path

			if (path === '/' || path === '') {
				this.is_main = true
			} else {
				this.is_main = false
			}
		}
	},
	methods: {
		openMobileMenu() {
			this.mobile_menu_active = true
			let body = document.getElementsByTagName('body')[0]
			body.classList.add('no-scroll')
		},
		closeMobilMenu() {
			this.mobile_menu_active = false
			let body = document.getElementsByTagName('body')[0]
			body.classList.remove('no-scroll')
		}
	}
}
</script>
