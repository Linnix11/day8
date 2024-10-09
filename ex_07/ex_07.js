const app = Vue.createApp({
    data() {
        return {
            imageStyle: {
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                transition: 'all 0.3s ease'
            }
        }
    },
    mounted() {
        document.addEventListener('mousemove', this.moveImage)
    },
    methods: {
        moveImage(event) {
            const image = this.$el.querySelector('img')
            const rect = image.getBoundingClientRect()
            const imageCenter = {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            }

            const angle = Math.atan2(event.clientY - imageCenter.y, event.clientX - imageCenter.x)
            const distance = 50 // Distance de déplacement

            const newX = imageCenter.x - Math.cos(angle) * distance
            const newY = imageCenter.y - Math.sin(angle) * distance

            this.imageStyle.left = `${newX}px`
            this.imageStyle.top = `${newY}px`
            this.imageStyle.transform = 'translate(-50%, -50%)'
        }
    }
})

app.mount('#app')