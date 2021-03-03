new Vue({
    el: 'block12',
    data: {
       number: 0
    },
 
    methods: {
        
        fun: function() {
            
            this.number = (this.number ) %2 + 1 ;

            if(this.number % 2 == 0){
                document.getElementById("hidden1").style.visibility = "visible";
                document.getElementById("mark3").innerHTML = "&minus;"
            }
               
            
            else {
                document.getElementById("hidden1").style.visibility = "hidden";
                document.getElementById("mark3").innerHTML = "&plus;"
            }
                
            
            return;
            
        }
     }
   
 });