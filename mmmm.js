async function getPrayerTimes(){
    const container=document.getElementById("container")
    const prayerAPI=await fetch("https://api.aladhan.com/v1/timings/$%7B20%7D-$%7BApr%7D-$%7B2026%7D?latitude=30&longitude=40&method=5")
    const prayerDict=await prayerAPI.json()
    const apiData=prayerDict.data.timings
    const hijriData = prayerDict.data.date.hijri;
    for (let i in apiData){
        const cards=`<div class="card"> 
                        <span class="prayer_name"> ${i} </span>
                        <span class="prayer-time">${apiData[i]}</span>

                        </div>
        `
        const cardDiv=document.getElementById("cards")
        cardDiv.innerHTML+=cards;
    }
   document.getElementById("hijriIcon").onclick = function(){
    document.getElementById("hijriDate").innerText =
        `${hijriData.day} ${hijriData.month.ar} ${hijriData.year} هـ`;
} 

}
getPrayerTimes()