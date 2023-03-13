const jour=document.getElementById('jour')
const heure=document.getElementById('heure')
const minute=document.getElementById('minute')
const seconde=document.getElementById('seconde') 

   //difference des cates den milliseconde

const dateT=document.querySelector('h1')  
      // souniuou chrono
      function getChrono(){
        
        const nouveau=new Date().getTime() // date ou nous sommes

const compteur=new Date('01/01/2024').getTime() // date ou l'on veut aller

        
        const ecarte=compteur-nouveau ; 
        const jours=Math.floor(ecarte/(1000*60*60*24));
   const heures=Math.floor((ecarte%(1000*60*60*24))/(1000*60*60))
   
    const minutes=Math.floor((ecarte%(1000*60*60))/(1000*60))
    const secondes=Math.floor((ecarte%(1000*60))/(1000))


   
   dateT.innerHTML=`${jours}jours,${heures}heures,${minutes}minutes,${secondes}seconde`;

      }
      

const intevall=setInterval(() => {
    getChrono()
},1000);