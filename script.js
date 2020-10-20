let umurManusia = prompt("Berapa Umur Kucing Anda ?")
const umurKucing = (umurManusia) => {
   if (umurManusia == 1) {
         return umurManusia*15
     } else if(umurManusia == 2) {
         return 24
     } else {
         return 24 + (4 * (umurManusia - 2))
     }
 }

 console.log(umurKucing(umurManusia));
 alert("Umur kucing anda dalam umur manusia adalah " + umurKucing(umurManusia)+" tahun.")
 alert("Terima Kasih :)") 