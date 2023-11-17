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
			console.log("Elemento in posizione: ", this.todo[i] );
			this.todo.splice( i, 1 );
		},
		// aggiungo elementi
		addElement(element) {
			console.log("click!", element);
            element = { text: element, done: false };
			this.todo.push(element);
			this.myInput = "";
		}
	},

	mounted() {

    },
}).mount('#app')

