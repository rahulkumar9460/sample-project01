new Vue({
    el: 'block_',
    data: {
      number: 0
    },
 
    
 
    methods: {
        
        fun: function() {
            this.number = this.number + 1;
            if(this.number%2==1){
             document.getElementById("block9").style.border = "2px solid #FFFFFF";
             document.getElementById("mark2").style.visibility = "visible";
            }
 
            else{
             document.getElementById("block9").style.border = "0px solid #FFFFFF";
             document.getElementById("mark2").style.visibility = "hidden";
            }
            return;
        }
     }
   
 });