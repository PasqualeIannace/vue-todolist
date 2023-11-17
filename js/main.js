const { createApp } = Vue

createApp({
	data() {
		return {
			todo: [
				{
					text: "Studiare",
					done: false
				},
				{
					text: "Fare la spesa",
					done: false
				},
				{
					text: "Lavare l'auto",
					done: false
				},
				{
					text: "Allenamento",
					done: false
				}
			]

			
		}
	},
	methods: {
		changeStatus(i) {
			console.log("click!", i);
			
			if(this.todo[i].done){
				this.todo[i].done = false;
			} else {
				this.todo[i].done = true;
			}
		}
	},
	mounted() {
        console.log(`Pagina caricata`);
        console.log(this.todo);
    },
}).mount('#app')

