<template lang="pug">
	section.main.page__inner
		.main-slider
			.swiper-wrapper.main-slider__wrapper
				.swiper-slide.main-slider__items
					.main-slider__bg(style='background-image: url("https://source.unsplash.com/1366x920/?icecream")')
					.container
						.main-slider__item
							.main-slider__item--title
								.main-slider__item--number 50
								.main-slider__item--txt Сортов мороженого
							.main-slider__item--desc От неповторимой классики до удивительной экзотики
							a(href='#').main-slider__item--btn Посмотреть сорта
				.swiper-slide.main-slider__items
					.main-slider__bg(style='background-image: url("https://source.unsplash.com/1366x920/?icecream")')
					.container
						.main-slider__item
							.main-slider__item--title
								.main-slider__item--number 20
								.main-slider__item--txt Сортов мороженого
							.main-slider__item--desc От неповторимой классики до удивительной экзотики
							a(href='#').main-slider__item--btn Посмотреть сорта
				.swiper-slide.main-slider__items
					.main-slider__bg(style='background-image: url("https://source.unsplash.com/1366x920/?icecream")')
					.container
						.main-slider__item
							.main-slider__item--title
								.main-slider__item--number 10
								.main-slider__item--txt Сортов мороженого
							.main-slider__item--desc От неповторимой классики до удивительной экзотики
							a(href='#').main-slider__item--btn Посмотреть сорта
			.main-slider__prev.slider__prev--wh
			.main-slider__next.slider__next--wh

		.main-info-block
			.main-info-block__wrapper
				.main-info-block__items(style="background-image:url(https://source.unsplash.com/1366x920/?icecream);")
					a(href='#').main-info-block__btn
						.main-info-block__btn--icons
						span Мороженое в баночках
						.main-info-block__btn--icons.arrow
					.main-info-block__text
						p Бесплатная доставка от 2 кг
						p Приготовим любой торт на заказ всего за 48 часов
						a(href='#') Вопрос-Ответ
				.main-info-block__items(style="background-image:url(https://source.unsplash.com/1366x920/?icecream);")
					a(href='#').main-info-block__btn
						.main-info-block__btn--icons
						span Торты из мороженого
						.main-info-block__btn--icons.arrow
					.main-info-block__text
						p Бесплатная доставка от 2 кг
						p Приготовим любой торт на заказ всего за 48 часов
						a(href='#') Вопрос-Ответ
				.main-info-block__items(style="background-image:url(https://source.unsplash.com/1366x920/?icecream);")
					a(href='#').main-info-block__btn
						.main-info-block__btn--icons
						span Выездное обслуживание
						.main-info-block__btn--icons.arrow
					.main-info-block__text
						p Бесплатная доставка от 2 кг
						p Приготовим любой торт на заказ всего за 48 часов
						a(href='#') Вопрос-Ответ

		.ice-info
			.ice-info__prev.slider__prev--orange
			.ice-info__next.slider__next--orange
			.swiper-wrapper.ice-info__slider
				.swiper-slide.ice-info__wrapper
					.ice-info__items
						.ice-info__img(style="background-image:url(https://source.unsplash.com/1366x920/?icecream);")
						.ice-info__content
							.ice-info__date 14 февраля
							.ice-info__title Заголовок про мороженое
							.ice-info__text.js--ice-info__text(:class="{'active': read_more}")
								p Мороженое — продукт, любимый нами еще с детства. Именно это холодное лакомство ассоциируется у нас с беззаботными детскими годами и по-детски ярким восприятием мира. С каким замиранием сердца все мы пели песню о волшебнике, который прилетит в голубом вертолете и оставит в подарок 500 эскимо…
								p Мороженое, как и любой другой продукт, в составе которого присутствует цельное молоко, способствует усвоению кальция, что особенно полезно для детей. В мороженом содержатся витамины A, B, D, E и P, а также целый перечень минеральных веществ — железо, магний, калий, фосфор, натрий. Кроме того, мороженое является калорийным, питательным продуктом, который помогает быстро восстановить энергию.
								.ice-info__links
									.ice-info__links--title Читайте также:
									a(href='#').ice-info__link.
										Заголовок про мороженое
									a(href='#').ice-info__link.
										Заголовок про мороженое и еще
									a(href='#').ice-info__link.
										Заголовок про мороженое
						.ice-info__btn--more.js--ice-info__btn--more(@click.prevent="onReadMore") Читать далее...
				.swiper-slide.ice-info__wrapper
					.ice-info__items
						.ice-info__img(style="background-image:url(https://source.unsplash.com/1366x920/?icecream);")
						.ice-info__content
							.ice-info__date 22 февраля
							.ice-info__title Заголовок про мороженое
							.ice-info__text.js--ice-info__text(:class="{'active': read_more}")
								p Мороженое — продукт, любимый нами еще с детства. Именно это холодное лакомство ассоциируется у нас с беззаботными детскими годами и по-детски ярким восприятием мира. С каким замиранием сердца все мы пели песню о волшебнике, который прилетит в голубом вертолете и оставит в подарок 500 эскимо…
								p Мороженое, как и любой другой продукт, в составе которого присутствует цельное молоко, способствует усвоению кальция, что особенно полезно для детей. В мороженом содержатся витамины A, B, D, E и P, а также целый перечень минеральных веществ — железо, магний, калий, фосфор, натрий. Кроме того, мороженое является калорийным, питательным продуктом, который помогает быстро восстановить энергию.
								.ice-info__links
									.ice-info__links--title Читайте также:
									a(href='#').ice-info__link.
										Заголовок про мороженое
									a(href='#').ice-info__link.
										Заголовок про мороженое и еще
									a(href='#').ice-info__link.
										Заголовок про мороженое
						.ice-info__btn--more.js--ice-info__btn--more(@click.prevent="onReadMore") Читать далее...
</template>

<script>

export default {
	data() {
		return {
			read_more: false,
		}
	},
	methods: {
		onReadMore() {
			this.read_more = false
		}
	}
}
</script>