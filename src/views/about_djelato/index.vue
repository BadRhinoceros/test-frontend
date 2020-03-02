<template lang="pug">
	section.djelato.page__inner
		.djelato__title-block
			h3.djelato__title.djelato__main-title О джелато
			.djelato__title-links
				a(href="#").djelato__link.
					Джелато - что это
				a(href="#").djelato__link.
					Сорбеты - что это
				a(href="#").djelato__link.
					Описание сортов
		.djelato__info-block
			.djelato__info-background(style="background-image: url('https://source.unsplash.com/1366x920/?icecream')")
			.djelato__info-desc-block
				h4.djelato__info-title.
					Угощение для семей с детьми
				p.djelato__info-txt.
					Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.
				h4.djelato__info-title.
					Угощение для семей с детьми
				p.djelato__info-txt.
					Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.
				a(href="#").btn--orange.djelato__info-btn.
					Узнать условия сотрудничества
		.djelato__subdesc-block
			.container
				.djelato__subdesc-items
					.djelato__subdesc-item
						.djelato__subdesc-img
						p.djelato__subdesc-title.
							Всегда свежее мороженное
						p.djelato__subdesc-desc.
							Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.
					.djelato__subdesc-item
						.djelato__subdesc-img
						p.djelato__subdesc-title.
							Всегда свежее мороженное
						p.djelato__subdesc-desc.
							Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.
					.djelato__subdesc-item
						.djelato__subdesc-img
						p.djelato__subdesc-title.
							Всегда свежее мороженное
						p.djelato__subdesc-desc.
							Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.

		.djelato__info-block
			.djelato__info-background(style="background-image: url('https://source.unsplash.com/1366x920/?icecream')")
			.djelato__info-desc-block
				h4.djelato__info-title.
					Угощение для семей с детьми
				p.djelato__info-txt.
					Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.
				h4.djelato__info-title.
					Угощение для семей с детьми
				p.djelato__info-txt.
					Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.
		.djelato__subdesc-block
			.container
				.djelato__subdesc-items
					.djelato__subdesc-item
						.djelato__subdesc-img
						p.djelato__subdesc-title.
							Всегда свежее мороженное
						p.djelato__subdesc-desc.
							Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.
					.djelato__subdesc-item
						.djelato__subdesc-img
						p.djelato__subdesc-title.
							Всегда свежее мороженное
						p.djelato__subdesc-desc.
							Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.
					.djelato__subdesc-item
						.djelato__subdesc-img
						p.djelato__subdesc-title.
							Всегда свежее мороженное
						p.djelato__subdesc-desc.
							Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.
		.materials__order
			.container
				h3.sub-title.materials__order-title.
					Условия сотрудничества
				.materials__order-wrap
					.materials__order-list
						.materials__order-item
							.materials__order-img
							p.materials__order-txt.
								Заказ выполняется в течение 24 часов
						.materials__order-item
							.materials__order-img
							p.materials__order-txt.
								Бесплатная доставка по г. Алматы возможна при заказе более 3 кг мороженого
						.materials__order-item
							.materials__order-img
							p.materials__order-txt.
								Оплатить заказ возможно по факту доставки наличными либо по безналичному расчету при условии заключения <b>Договора поставки</b>
	

		//-.djelato__sorts
			.container
				h4.djelato__sorts-title.
					Описание сортов
				.djelato__sorts-slider
					//- .djelato__sorts-prev
					//- .djelato__sorts-next
					.djelato__sorts-wrap
						.djelato__sorts-slide
							.djelato__sorts-item
								p.djelato__sort-title.
									Сорбеты
								p.djelato__sort-desc.
									Итальянское мороженное сделанное из натуральных фруктов и ягод. 1-2 % жирности.
								.djelato__qualities
									.djelato__quality
										.djelato__quality-img
										p.djelato__quality-desc.
											Из натуральных фруктов и ягод
									.djelato__quality
										.djelato__quality-img
										p.djelato__quality-desc.
											В 5 раз меньше жирность
									.djelato__quality
										.djelato__quality-img
										p.djelato__quality-desc.
											Подходит веганам
		//-.ice-cream-filter
			.container
				.ice-cream-filter__wrap
					.ice-cream-filter__item.ice-cream-filter__control
					.ice-cream-filter__item
					.ice-cream-filter__item
					.ice-cream-filter__item
					

</template>
<script>
import { getIceCreamTypes } from '@/api/layout'

export default {
	data() {
		return {
			ice_cream_types: ''
		}
	},
	created() {
		console.log('lol')
		getIceCreamTypes().then(response => {
			if (!response.errors) {
				let data = response.data.data
				console.log(response)
				// console.log('data', data)

				this.ice_cream_types = data
			} else {
				console.log('Ого, ошибка')
			}
		}).catch(err => {
			console.log(err)
		})
	}
}
</script>