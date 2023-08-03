const main = document.querySelector('main');
let baseUrl = `https://jsonplaceholder.typicode.com/posts`;
let buttons = document.querySelector('button');
function fetchData() {
    fetch(baseUrl)
        .then(function (res) {return res.json()})
        .then(function (data) {
    
            let section = ''

            data.map(function (data) {
                let {id, title, body } = data;
                section += `   
                <div class="main-div" data-title="${title}" data-desc="${body}">
             <div>
                <h4>${title}</h4>
                <p>${body.slice(0, 50)}...</p>
                <a href="./content.html?${id}"><button>read more</button></a>
             </div>
             </div>
                  `
               

            });
            main.innerHTML = section;

           
        });
    //   buttons.addEventListener('click', (e) => { 
    //             let body = e.currentTarget.dataset.desc;
                
    //         })  
}
 
window.addEventListener('DOMContentLoaded', () => fetchData());
fetchData()