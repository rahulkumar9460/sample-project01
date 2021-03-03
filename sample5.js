new Vue({
    el: 'block13',
    data: {
       number: 0
    },
 
    methods: {
        
        fun: function() {
            
            this.number = (this.number ) %2 + 1 ;

            if(this.number % 2 == 1){

                document.getElementById("mark4").innerHTML = "&minus;"
            }
               
            
            else {
                
                document.getElementById("mark4").innerHTML = "&plus;"
            }
                
            
            return;
            
        }
     }
   
 });