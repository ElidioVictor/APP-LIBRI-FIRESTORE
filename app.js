/*
LISTAGEM
*/

const livroList = document.querySelector('#book-list');

function renderBook(doc){

    // criando os elemnetos html
    let list = document.createElement('li');
    let titulo = document.createElement('span');
    let autor = document.createElement('span');

    // carrega os elementos
    list.setAttribute('data-id', doc.id);
    titulo.textContent = doc.data().titulo;
    autor.textContent = doc.data().autor;

    
    list.appendChild(titulo);
    list.appendChild(autor);
    livroList.appendChild(list);
};

db.collection('Aula1')
    .get()
    .then(
        (snapshot)=> {
            snapshot.docs.forEach(doc => {
                renderBook(doc);
            });
        }
    );

/*
INSERÇÃO
*/

const form = document.querySelector('#add-book-form');

form.addEventListener('submit', (event)=>{

    event.preventDefault();
    db.collection('Aula1')
    .add({
        autor: form.autor.value,
        titulo: form.titulo.value
    })
    .then(()=>{
        form.autor.value = ''
        form.titulo.value = ''
        window.location.reload()
    })

});