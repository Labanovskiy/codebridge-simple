
// fetch('https://api.spaceflightnewsapi.net/v4/articles/?format=json').then(function (result) {
//    return result.json()
// }).then(function (data) {
//    console.log(data);
// })

const state = {};
const title1 = document.querySelector('[data-title1]');
const title2 = document.querySelector('[data-title2]');
const title3 = document.querySelector('[data-title3]');
const title4 = document.querySelector('[data-title4]');
const title5 = document.querySelector('[data-title5]');
const title6 = document.querySelector('[data-title6]');

const desc1 = document.querySelector('[data-desc1]');
const desc2 = document.querySelector('[data-desc2]');
const desc3 = document.querySelector('[data-desc3]');
const desc4 = document.querySelector('[data-desc4]');
const desc5 = document.querySelector('[data-desc5]');
const desc6 = document.querySelector('[data-desc6]');


getApi ();
async function getApi () {
    const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles/?format=json');
    const data = await response.json();
    const result = await data;

    state.title1 = result.results[0].title
    state.title2 = result.results[1].title
    state.title3 = result.results[2].title
    state.title4 = result.results[3].title
    state.title5 = result.results[4].title
    state.title6 = result.results[5].title
    

    state.desc1 = result.results[0].summary
    state.desc2 = result.results[1].summary
    state.desc3 = result.results[2].summary
    state.desc4 = result.results[3].summary
    state.desc5 = result.results[4].summary
    state.desc6 = result.results[5].summary

    title1.textContent = state.title1
    desc1.textContent = state.desc1

    title2.textContent = state.title2
    desc2.textContent = state.desc2

    title3.textContent = state.title3
    desc3.textContent = state.desc3
    
    title4.textContent = state.title4
    desc4.textContent = state.desc4

    title5.textContent = state.title5
    desc5.textContent = state.desc5

    title6.textContent = state.title6
    desc6.textContent = state.desc6
};









