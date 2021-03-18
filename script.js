//jshint esversion:6
//apoikey=	
//a87b3645166900960c3e7f508e1d6e1d;
let loc=document.getElementById("location");
let tempIcon=document.getElementById("temp-icon");
let tempValue=document.getElementById("temp-value");
let climate=document.getElementById("climate");

let iconFile;
window.addEventListener("load",()=>{
    let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            long= position.coords.longitude;
            lat=position.coords.latitude;
            //const proxy="https://cors-anywhere.herokuapp.com";
            const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=a87b3645166900960c3e7f508e1d6e1d`;
            fetch(api)
             .then((response)=>{
                 return response.json();
             })
             .then((data)=>{
                 const {name}=data;
                 const {feels_like}=data.main;
                 const {id, main}=data.weather[0];
                    loc.textContent=name;
                    climate.textContent=main;
                    tempValue.textContent=Math.round(feels_like-273); 

                // if(id<250){
                //     tempIcon.src= '/icon/icon/storm.png';

                // }else if(id< 350){
                //     tempIcon.src= 'icon/icon/drizzles.png';
                // }else if(id< 550){
                //     tempIcon.src= 'icon/icon/rain.png';
                // }else if(id< 650){
                //         tempIcon.src= 'icon/icon/snow.png';
                // }else if(id< 800){
                //         tempIcon.src= 'icon/icon/atmoshpere.png';
                // }else if(id=== 800){
                //     tempIcon.src= 'icon/icon/clear.png';
                // }else if(id> 800){
                //     tempIcon.src= 'icon/icon/clouds.png';
                // }
                    console.log(data);
             });
        });
    }
});