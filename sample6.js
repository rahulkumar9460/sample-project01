new Vue({
    el: 'app1',
    data: {
       number: 0
    },
 
    methods: {
        
        fun: function() {
            
            this.number = (this.number ) %2 + 1 ;

            if(this.number % 2 == 1){

                document.getElementById("content1").style.display = "block"
            }
               
            
            else {
                
                document.getElementById("content1").style.display = "none"
            }
                
            
            return;
            
        }
     }
   
 });