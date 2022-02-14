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

Per le immagini va bene utilizzare qualsiasi 
servizio di placeholder ad es: https://picsum.photos/id/237/600/350

- Prendendo come riferimento il layout
di esempio presente nell’html, stampiamo
i post del nostro feed.*/

/*Creazione array di 5 oggetti con 
le informazioni necessarie */

const array_social = [
    { 
        nome_autore : 'Samuele',
        foto_profilo : 'https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg',
        data : '10 mesi fa',
        testo_del_post : 'Lorem ipsum dolor sit amet. Et impedit quia ut distinctio cupiditate ex velit explicabo sed tempore magnam qui vitae fugit sed enim voluptas non beatae minus. Et minus commodi quo beatae culpa aut rerum reiciendis ab consectetur tenetur. ',
        immagine : './img/01.jpg',
        numero_di_likes : '500',
    },
    { 
        nome_autore : 'Elena',
        foto_profilo : 'https://www.w3schools.com/howto/img_avatar2.png',
        data : '15/02/2020',
        testo_del_post : 'Et officia facere quo nesciunt provident est rerum modi et veritatis rerum. Aut adipisci ipsum qui dolorem eveniet qui minima ipsam et ratione quasi quo nisi placeat aut vero rerum et sunt ullam! In fuga velit in aliquam repellat aut quia vitae non dolorum architecto. Est ullam voluptatem in laboriosam placeat cum totam deleniti. ',
        immagine : './img/02.jpg',
        numero_di_likes : '253',
    },
    { 
        nome_autore : 'Sofia',
        foto_profilo : 'https://www.w3schools.com/w3images/avatar6.png',
        data : '19/06/2014',
        testo_del_post : '33 natus illum ab velit minus sit officiis tempora. Sed earum repellendus ut animi nobis ut totam voluptas ut impedit quae et corrupti praesentium. Eum velit nihil est quidem voluptate ad enim commodi non quod consequuntur. ',
        immagine : './img/03.jpg',
        numero_di_likes : '478',
    },
    { 
        nome_autore : 'Marco',
        foto_profilo : 'https://www.w3schools.com/w3images/avatar2.png',
        data : '05/12/2021',
        testo_del_post : 'pSit quam necessitatibus et doloribus aliquid id architecto recusandae et voluptatibus nisi et voluptatem rerum! Enim cumque est odit quas qui totam expedita rem voluptas natus id laborum delectus. Et eius eaque qui cumque veniam et mollitia omnis id galisum blanditiis. ost',
        immagine : './img/04.jpg',
        numero_di_likes : '600',
    },
    { 
        nome_autore : 'Paolo',
        foto_profilo : 'https://nisargresort.in/wp-content/uploads/2019/11/new-man-avatar-icon-flat-vector-19152349.jpg',
        data : '25/06/2018',
        testo_del_post : 'Qui perferendis praesentium et molestiae dolore non voluptas sint aut maiores magni aut repudiandae assumenda qui vitae quisquam aut dolor laudantium. Ad corporis minus hic voluptates voluptatem et reiciendis deleniti. Ea neque sapiente At voluptas provident ad temporibus esse ea doloribus eligendi',
        immagine : './img/05.jpg',
        numero_di_likes : '740',
    }
];



//referenza 
const container = document.getElementById('container');

generatore_post(array_social, container);

function generatore_post(array_social, container) {

container.innerHTML = '';

for (let i = 0; i < array_social.length; i++) {
    const post_social = array_social[i];
    //console.log(post_social);
container.innerHTML += `
<div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${post_social.foto_profilo}" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${post_social.nome_autore}</div>
                        <div class="post-meta__time">${post_social.data}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${post_social.testo_del_post}</div>
            <div class="post__image">
                <img src="${post_social.immagine}" alt="">
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
                        Piace a <b id="like-counter-1" class="js-likes-counter">${post_social.numero_di_likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div> 
`
}
}