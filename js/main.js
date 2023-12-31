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
			],

			myInput : "",			
		}		
	},

	methods: {
		// sbarro gli elementi cliccati
		changeStatus(i) {
			if(this.todo[i].done){
				this.todo[i].done = false;
			} else {
				this.todo[i].done = true;
			}
		},
		// aggiungo pulsante elimina
		remove(i) {
			this.todo.splice( i, 1 );
		},
		// aggiungo elementi
		addElement() {
			let element = { text : this.myInput, done: false };	
			this.todo.push(element);
			this.myInput = "";
		}
	},

	mounted() {

    },
}).mount('#app')

