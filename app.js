const app = Vue.createApp({
    data() {
        return{
            courseGoalOne:'Master Vue!',
            courseGoalTwo:'Learn Vue!',
            courseGoalThree:'<h2> Finish Vue </h2>',
            vueLink:'https://vuejs.org/'
        };
    },
    methods:{
        outputGoals(){
            const random=Math.random();
            if(random < 0.5)
            return this.courseGoalOne;
            return this.courseGoalTwo;
        },
        outputHtml(){
            return `<h3>Test method html </h3>`
        }
    }
});
app.mount('#user-goal');