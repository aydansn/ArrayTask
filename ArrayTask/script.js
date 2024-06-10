const populyasiya = [100, 200, 50, 30];
if(populyasiya.length===4){
    console.log("dogrudur");
}
else{
    console.log("yanlishdir");
}
const faizler = [];
const dunyaninFaizi = populyasiya => {
    const worldPopulation = 7900;
    const percentage = populyasiya*100/worldPopulation;
    faizler.push(percentage);
    return percentage;
   
};
dunyaninFaizi(populyasiya[0]);
dunyaninFaizi(populyasiya[1]);
dunyaninFaizi(populyasiya[2]);
dunyaninFaizi(populyasiya[3]);
console.log(faizler);


//----------------------------Task2---------------------------------
const neighbours = ["Gurcustan", "Turkiye", "Rusiya"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop("Utopia");
console.log(neighbours);
if(neighbours==="Almania"){
    console.log("Mərkəzi Avropa ölkəsi deyil");
}
else{
    console.log("Mərkəzi Avropa ölkəsidir");
}
neighbours.splice(2, 1, "Canada");
console.log(neighbours);

//----------------------------Challange-1--------------------------------

function servisHaqqiniHesabla(hesab) {
    if (hesab >= 50 && hesab <= 300) {
        return hesab * 0.15;
    } else {
        return hesab * 0.20;
    }
}
function servisHesabi(hesab) {
    var servisHaqqi = servisHaqqiniHesabla(hesab);
    var umumiHesab = hesab + servisHaqqi;
    return [hesab, servisHaqqi, umumiHesab];
}

const hesablar = [125, 555, 44];
servisHesabi(hesablar);
console.log(hesablar);
