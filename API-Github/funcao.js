let repositories = document.querySelector('.content-main')

const nome_input = document.getElementById("texto-insert");

function trash(){
    repositories.innerHTML = "";
}

function getApiGithub(nome) {
    const global_nome = document.getElementById("texto-insert").value;
    nome = global_nome;
    nome = nome.toLowerCase();
    console.log(nome)
    if(nome){
        fetch(`http://api.github.com/users/${nome}/repos`)
        .then(async res => {
            if( !res.ok) {
                throw new Error(res.status)
            }
            trash();
            let data = await res.json();
            data.map( item => {
                let project = document.createElement('div');
                project.innerHTML = 
                `<div class="project">
                <div>
                    <h4 class="title">${ item.name}</h4>
                    <span class="date-create">${ Intl.DateTimeFormat("pt-BR").format(new Date( item.created_at))}</span>
                </div>
                <div>
                    <a href="${ item.html_url}" target="_blank">${ item.html_url}</a>
                    <span class="language"><span class="circle"></span>${ item.language}</span>
                </div>
                </div>`

                repositories.appendChild(project);
            })
        })
    } else {
        console.log("Deu Errado... culpa do servidor :)")
    }
}

nome_input.addEventListener("focusout", getApiGithub)