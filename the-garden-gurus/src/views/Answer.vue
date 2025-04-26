<script>
import ThanksModal from '@/components/ThanksModal.vue';
import router from '@/router';

export default {
    name: "Answer",
    components: {
        ThanksModal,
    },
    data () {
        return {
            currentAnswer: 0,
            answers: [
                {
                    title: 'Откуда Вы узнали о нашем "продукте" впервые?',
                    list: [
                        'По телевидению',
                        'По радио',
                        'В газете',
                        'В журнале',
                        'В Интернете/на веб-сайте',
                        'У знакомых или друзей',
                        'other'
                    ]
                },
                {
                    title: 'Как часто Вы пользуетесь нашим продуктом?',
                    list: [
                        'Каждый день',
                        'Несколько раз в неделю',
                        'Раз в неделю',
                        'Несколько раз в месяц',
                        'Очень редко',
                        'Никогда не пользовался'
                    ]
                },
                {
                    title: 'Что побудило Вас попробовать наш продукт?',
                    list: [
                        'Реклама',
                        'Совет друга',
                        'Интересное предложение или акция',
                        'Отзывы пользователей',
                        'Собственное любопытство',
                        'other'
                    ]
                },
                {
                    title: 'Насколько Вы удовлетворены качеством продукта?',
                    list: [
                        'Очень доволен',
                        'Доволен',
                        'Нейтрально',
                        'Недоволен',
                        'Очень недоволен'
                    ]
                },
                {
                    title: 'Будете ли Вы рекомендовать наш продукт другим?',
                    list: [
                        'Да, обязательно',
                        'Возможно',
                        'Не уверен',
                        'Скорее нет',
                        'Нет, никогда'
                    ]
                },
                {
                    title: 'Какие улучшения Вы хотели бы видеть в продукте?',
                    list: [
                        'Лучшее качество',
                        'Больше функций',
                        'Ниже цена',
                        'Лучшая поддержка',
                        'Другой внешний вид',
                        'other'
                    ]
                },
                {
                    title: 'Где Вы обычно покупаете подобные продукты?',
                    list: [
                        'В супермаркете',
                        'Через интернет-магазин',
                        'На рынке',
                        'У официального представителя',
                        'У знакомых',
                        'Другой способ'
                    ]
                },
                {
                    title: 'Какую цену Вы считаете приемлемой за наш продукт?',
                    list: [
                        'Очень дешево',
                        'Ниже средней',
                        'Средняя цена',
                        'Выше средней',
                        'Дорого, но оправдано',
                        'Слишком дорого'
                    ]
                },
                {
                    title: 'Что для Вас самое важное при выборе продукта?',
                    list: [
                        'Цена',
                        'Качество',
                        'Отзывы',
                        'Популярность бренда',
                        'Рекомендации',
                        'Упаковка и внешний вид'
                    ]
                },
                {
                    title: 'Какие дополнительные услуги Вы хотели бы получить?',
                    list: [
                        'Бесплатная доставка',
                        'Гарантия',
                        'Скидки для постоянных клиентов',
                        'Техническая поддержка',
                        'Возможность возврата',
                        'other'
                    ]
                }
            ],
            thanksModalOpen: false,
        }
    },
    methods: {
        nextAnswer () {
            if (this.answers.length > this.currentAnswer + 1) {
                this.currentAnswer += 1;
            } else {
                this.thanksModalOpen = true;
            }
        },
        modalClose () {
            this.currentAnswer = 0;
            this.thanksModalOpen = false;
            router.push({name: 'home'})
        }
    }
}
</script>

<template>
    <section class="answer">
        <div class="container answer-container">
            <div class="answer-content">
                <h3>Здравствуйте,</h3>
                <p>потратьте, пожалуйста, несколько минут своего времени на заполнение следующей анкеты.</p>
                <h2>
                    {{currentAnswer + 1}}. {{ answers[currentAnswer].title }}
                </h2>
                <ul>
                    <li
                        v-for="(item, i) in answers[currentAnswer].list"
                        :key="i"
                    >
                        <button @click="nextAnswer()" v-if="item != 'other'">
                            {{ item }}
                        </button>
                        <input v-else  v-on:keyup.enter="nextAnswer()" type="text" placeholder="Другой ...">
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <thanks-modal v-if="thanksModalOpen" @modalClose="modalClose()">Спасибо за опрос, ваш результат столько-то 100%</thanks-modal>
</template>

<style>

</style>