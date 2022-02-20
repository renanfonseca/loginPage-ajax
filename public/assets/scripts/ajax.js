const request = obj => {
    return new Promise((resolve, reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        xhr.addEventListener('load', ()=>{
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject({
                    code: xhr.status,
                    msg: xhr.statusText
                });
            }
        });
    });
}


document.addEventListener('click', e => {    
    const el = e.target;
    const id = el.id.toLowerCase();
    
    
    if(id === 'btn-cadastrar'){
        e.preventDefault();   
        carregarPagina(el);     
    }
});

async function carregarPagina(el) {
    const href = el.getAttribute('href');

    const objConfig = {
        method: 'GET',
        url: href
    }

    try{
        const response = await request(objConfig);
        console.log(response);
        carregaConteudo(response);
    } catch (e) {
        console.log(e);
    }
}

function carregaConteudo(reponse) {
    const conteudo = document.querySelector(".content");
    conteudo.innerHTML = reponse;
}
