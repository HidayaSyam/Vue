Vue.createApp({
    // data: function(){
        //First Way
    // }
    //Second Way 
    data(){ //it should define the data that the app wear of and we will return an Object
        return{
            goals:[],
            enteredValue:'',
            // console.log();
        };
    },
    methods:{ // we will create the methods that it should be callable inside the HTML code
        addGoal(){
            this.goals.push(this.enteredValue);
            this.enteredValue=' '
        }
    }
}).mount('#app'); // to decied which part should be affected 


/* 
Vanilla JavaScript 
const buttonEL=document.querySelector('button');
const inputEL=document.querySelector('input');
const ulEl=document.querySelector('ul');
function addGoal(){
    const liEl=document.createElement('li');
    liEl.textContent=inputEL.value;
    ulEl.appendChild(liEl)
    inputEL.value=" "
}
buttonEL.addEventListener('click',addGoal)
 */