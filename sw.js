
const CACHE_VERSION = 1;
const CACHE_NAME = 'weather_cache-v' + CACHE_VERSION;

const URLS_TO_CACHE = [



];




self.addEventListener('install', (evt)=>{

    console.log('preparing to prefetch resources: ', URLS_TO_CACHE);
    evt.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache=>{cache.addAll(URLS_TO_CACHE)})

    );

});


self.addEventListener('activate', (evt)=>{



});



self.addEventListener('fetch', (evt)=>{



});