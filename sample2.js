new Vue({
   el: 'block',
   data: {
     number: 0
   },

   

   methods: {
       
       fun: function() {
           this.number = this.number + 1;
           if(this.number%2==1){
            document.getElementById("block8").style.border = "2px solid #FFFFFF";
            document.getElementById("mark1").style.visibility = "visible";
           }

           else{
            document.getElementById("block8").style.border = "0px solid #FFFFFF";
            document.getElementById("mark1").style.visibility = "hidden";
           }
           return;
       }
    }
  
});