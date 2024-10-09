new Vue({
    el: '#app',
    data: {
        pet: 'Chat',
        number1: 6,
        number2: 7,
        sentence1: 'Être ou ne pas être en majuscules, telle est la question.',
        sentence2: 'etxet ec eril xuep eJ',
        sentence3: 'Je ne suis pas en majuscules et certainement pas inversée',
        debugMessage: 'Vue est initialisé!'
    },
    computed: {
        blank1() { return this.pet },
        blank2() { return this.number1 * this.number2 },
        blank3() { return this.number1 / 2 },
        blank4() { return Math.pow(this.number2, 3) },
        blank5() { return this.sentence1.toUpperCase() },
        blank6() { return this.sentence2.split('').reverse().join('') },
        blank7() { return this.sentence3.toUpperCase().split('').reverse().join('') }
    }
});

console.log('Vue initialisé');