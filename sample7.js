new Vue({
    el: 'app2',
    data: {
       number: 0
    },
 
    methods: {
        
        fun: function() {
            
            this.number = (this.number ) %2 + 1 ;

            if(this.number % 2 == 1){

                document.getElementById("content2").style.display = "block"
            }
               
            
            else {
                
                document.getElementById("content2").style.display = "none"
            }
                
            
            return;
            
        }
     }
   
 });