const apiKey = '9ddf57db420ad015c1b7cc510e3e152d';
const baseUrl ='https://api.openweathermap.org/data/2.5/';




window.addEventListener('load', (evt)=>{

    if('serviceWorker' in navigator){
        navigator.serviceWorker.register('/sw.js')
        .then(register=>{
            console.log('Service Worker Successfully registeed!');
        })
        .catch(()=>{ console.log('Service worker registration failed')});
    }
    else{
        console.log('Service worker not supported!');
    }

});