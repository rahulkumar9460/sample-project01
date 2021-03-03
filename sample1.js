new Vue({
   el: 'image-slider',
   data: {
       images: ['images/bottle.png', 'images/bottle1.png', 'images/bottle2.png', 'images/bottle3.png', 'images/bottle4.png'],
       currentNumber: 0,
       curr: 1,
       timer: null
       
   },

   mounted: function () {
       this.startRotation();
   },

   methods: {
       startRotation: function() {
           this.timer = setInterval(this.next, 4000);
       },

       stopRotation: function() {
           clearTimeout(this.timer);
           this.timer = null;
       },

       next: function() {
           var x = (Math.abs(this.currentNumber) % this.images.length ) + 1;
           document.getElementById("line" + x).style.borderColor = "white";

           this.currentNumber += 1
           
           x = (Math.abs(this.currentNumber) % this.images.length ) + 1;
           document.getElementById("line" + x).style.borderColor = "skyblue";

       },
       prev: function() {
           var x = (Math.abs(this.currentNumber) % this.images.length ) + 1;
           document.getElementById("line" + x).style.borderColor = "white";

           this.currentNumber -= 1
          
           x = (Math.abs(this.currentNumber) % this.images.length ) + 1;
           document.getElementById("line" + x).style.borderColor = "skyblue";
       }
   },
   
   computed: {
      currentImage: function() {
         this.curr = (Math.abs(this.currentNumber) % this.images.length ) + 1;
         
        return this.images[Math.abs(this.currentNumber) % this.images.length];
     }
   }
});