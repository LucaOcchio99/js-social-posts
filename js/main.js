/*Ricreiamo un feed social aggiungendo 
al layout di base fornito (allegato
sotto) il nostro codice javascript in
 cui:
- Creiamo il nostro array di 5 oggetti
che rappresentano ciascun post. 
Ogni post dovrà avere le informazioni
necessarie per stampare la relativa 
card: nome autore, foto profilo, data,
testo del post, immagine, numero di
likes.

- Prendendo come riferimento il layout
di esempio presente nell’html, stampiamo
i post del nostro feed.*/

/*Creazione array di 5 oggetti con 
le informazioni necessarie */

//REFERENZE
const contenitore_padre = document.getElementById('container');
//console.log(contenitore_padre);

const post = [
    {
     nome_autore : 'Alessandro',
     foto_profilo : './img/01.jpg',
     data : '02/02/2014',
     testo_del_post : 'sdfndkfdknfdskndskfndlksnfdkslnfkdslnfslnfskflsdnfskfnds',
     numero_di_likes : '54',
    },
    {
        nome_autore : 'Frangeeeee',
        foto_profilo : './img/02.jpg',
        data : 'anno 0',
        testo_del_post : 'sdfndksadsadadsadsafdknfdskndskfndlksnfdkslnfkdslnfslnfskflsdnfskfnds',
        numero_di_likes : '33',
       },
       {
        nome_autore : 'Samueeee',
        foto_profilo : './img/03.jpg',
        data : '02/12/2018',
        testo_del_post : 'sdfndkfdknfdskndskfndlksnfdkslnfkdslnfslnfskflsdnfskfnds',
        numero_di_likes : '4',
       },
       {
        nome_autore : 'Giuen',
        foto_profilo : './img/04.jpg',
        data : '2 ore fa',
        testo_del_post : 'C:\Users\Luca\Desktop\Boolean\Esercizi\js-social-posts\img\photo-1494438639946-1ebd1d20bf85.jpg',
        numero_di_likes : '78',
       },
       {
        nome_autore : 'Piaaa',
        foto_profilo : './img/05.jpg',
        data : '08/09/2020',
        testo_del_post : 'sdfnfddsfdsdkfdknfdskndskfndlksnfdkslnfkdslnfslnfskflsdnfskfnds',
        numero_di_likes : '5854',
       },

];


gen_feed()

function gen_feed() {

//itero tante quanto sono i post da generare
for (let i = 0; i < post.length; i++) {
    const post_singolo = post[i];
    console.log(post_singolo) //--> estrapolo ogni singolo oggetto
    
//inserisco l'html da implementare, tramite js,
contenitore_padre.innerHTML += `<div class="post">
<div class="post__header">
    <div class="post-meta">                    
        <div class="post-meta__icon">
            <img class="profile-pic" src="${post_singolo.foto_profilo}" alt="${post_singolo.nome_autore}">                    
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author">${post_singolo.nome_autore}</div>
            <div class="post-meta__time">${post_singolo.data}</div>
        </div>                    
    </div>
</div>
<div class="post__text">${post_singolo.testo_del_post}</div>
<div class="post__image">
    <img src="${post_singolo.foto_profilo}" alt="fsfs">
</div>
<div class="post__footer">
    <div class="likes js-likes">
        <div class="likes__cta">
            <a class="like-button  js-like-button" href="#" data-postid="1">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
            </a>
        </div>
        <div class="likes__counter">
            Piace a <b id="like-counter-1" class="js-likes-counter">${post_singolo.numero_di_likes}</b> persone
        </div>
    </div> 
</div>            
</div>`

}
}