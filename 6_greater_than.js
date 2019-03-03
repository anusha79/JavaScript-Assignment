var num = [10, 23, 33,1, 4, 50, 70,99,66,100];
   function result(num){
       return num>50;
   }
   function myFunction(){
       document.getElementById("txt").innerHTML=num.filter(result);
   }