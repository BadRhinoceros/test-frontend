<template lang="pug">
	section.materials.page__inner
		.djelato__title-block
			h3.djelato__title Сырье для производства
		.djelato__subdesc-block
			.container
				.djelato__subdesc-items
					.djelato__subdesc-item
						.djelato__subdesc-img
						p.djelato__subdesc-title.
							Эксклюзивный поставщик
						p.djelato__subdesc-desc.
							Tutto Bene единственный официальный поставщик на территории Казахстана продукции для производства компании Dolce Rosa.
					.djelato__subdesc-item
						.djelato__subdesc-img
						p.djelato__subdesc-title.
							Стабильные поставки
						p.djelato__subdesc-desc.
							Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.
					.djelato__subdesc-item
						.djelato__subdesc-img
						p.djelato__subdesc-title.
							Быстрая доставка
						p.djelato__subdesc-desc.
							Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.Amet ullamco amet eiusmod eu sunt.
		.materials__company
			.container
				.materials__company-wrap(v-if="supplier")
					.materials__company-block
						.materials__company-img
						.materials__company-txt
							.materials__company-desc-block
								p.materials__company-title.
									{{supplier.name}}
								p.materials__company-desc.
									Крупный поставщик сырья для производства мороженого по СНГ. Располагаются в Москве. Широкий ассортимент и всё в этом духе. Вы сами всё знаете, покупайте штуки и делайте мороженое. Примерно столько текста будет даже слишком.
							p.materials__company-desc.
								Детально узнать о продукции перед заказом можно на сайте <b><a href="#">Dolce Rosa.</a></b>
					.materials__company-list
						h4.sub-title.materials__list-title.
							Список продукции Dolce Rosa
						.materials__list-wrap(v-html="supplier.productList")
					a(:href="supplier" download).btn--orange.materials__company-list-btn.
						Получить прайс-лист

		template(v-if="materials_list")
			.materials__item-wrap(v-for="item in materials_list")
				.materials__item-img(:style="`background-image:url(http://timentys.kz/storage/${item.image});`")
				.materials__item-info
					h3.sub-title.materials__item-title.
						{{ item.title }}
					//- А вот тут бы приголился приход в виде разметки
					.materials__item-desc
						p {{ item.description }}
					//- Куды должно вести?
					a(href="#").btn--orange.materials__item-btn.
						Связаться с менеджером				
		
		.materials__order
			.container
				h3.sub-title.materials__order-title.
					Как заказать?
				.materials__order-wrap
					.materials__order-list
						.materials__order-item
							.materials__order-img
							p.materials__order-txt.
								Заполнить <b>форму заявки</b>
						.materials__order-item
							.materials__order-img
							p.materials__order-txt.
								Отправить документ на почтовый адрес tuttobene@mail.ru
						.materials__order-item
							.materials__order-img
							p.materials__order-txt.
								Оплатить заказ возможно по факту доставки наличными либо по безналичному расчету при условии заключения <b>Договора поставки</b>
		.materials__question
			.container
				h3.sub-title.txt-align-center.materials__question-title.
					По всем вопросам о сырье для производства
				.materials__question-wrap
					.materials__question-block
						.materials__question-img-block
							.team__img-wrap.materials__question-img-wrap
								.team__img.materials__question-img
						.materials__question-txt
							.materials__question-person
								p.materials__question-name.
									Анна Вязишина
								p.materials__question-position.
									Заместитель директора
							p.materials__question-desc.
								Отвечу на любые вопросы о взаимовыгодном сотрудничестве. Мои контакты: + 7 777 77 77 777 (WhatsApp)
							p.materials__question-desc.
								Звонки принимаются с 9:00 до 17:00 по будням
							a(href="#").btn--orange.materials__question-btn.
								Перезвоните мне


</template>

<script>
import { getRawMaterials, getRawMaterialsInfo } from '@/api/about'


export default {
	data() {
		return {
			supplier: '',
			supplier_price_list: '',
			materials_list: ''
		}
	},
	created() {
		getRawMaterialsInfo().then(response => {
			if (!response.data.errors.length) {
				this.supplier = response.data.payload
				this.supplier_price_list = JSON.parse(response.data.payload.priceList)
				console.log('getRawMaterialsInfo response', response.data.payload)
            } else {
                console.log('Error', response.data.errors)
            }
		}).catch(error => {
			console.log(error)
		})

		getRawMaterials().then(response => {
			if (!response.data.errors.length) {
				this.materials_list = response.data.payload
				console.log('getRawMaterials response', response.data.payload)
            } else {
                console.log('Error', response.data.errors)
            }
		}).catch(error => {
			console.log(error)
		})
	}
}
</script>