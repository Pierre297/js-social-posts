const publishPost = document.querySelector(".posts-list");
const likeButton = document.querySelector(".like-button__icon")

// - Creiamo il nostro array di oggetti che rappresentano ciascun post.
var socialPost = [

    // Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
    { 
        "profilePicture" : "https://unsplash.it/300/300?image=",
        "userName" : "Philip Mangione",
        "twittPost" : "Lorem Ipsum",
        "postData" : 3,
        "postImage" : "https://unsplash.it/300/300?image=",
        "postLikes" : 75
        
    },
    { 
        "profilePicture" : "https://unsplash.it/300/300?image=",
        "userName" : "Philip Mangione",
        "twittPost" : "Lorem Ipsum",
        "postData" : 3,
        "postImage" : "https://unsplash.it/300/300?image=",
        "postLikes" : 75
    },
    { 
        "profilePicture" : "https://unsplash.it/300/300?image=",
        "userName" : "Philip Mangione",
        "twittPost" : "Lorem Ipsum",
        "postData" : 3,
        "postImage" : "https://unsplash.it/300/300?image=",
        "postLikes" : 75
        
    },
    { 
        "profilePicture" : "https://unsplash.it/300/300?image=",
        "userName" : "Philip Mangione",
        "twittPost" : "Lorem Ipsum",
        "postData" : 3,
        "postImage" : "https://unsplash.it/300/300?image=",
        "postLikes" : 75
    },
    

];

        // cicli oggetti
    for(let i = 0; i < socialPost.length; i++) {

        let profileImg = '';
        let profileName = '';
        let profileTwitt = '';
        let profileData = '';
        let profilePostImg = '';
        let profilePostLikes = '';

        for(var key in socialPost){

            profileImg = socialPost[i].profilePicture;
            profileName = socialPost[i].userName;
            profileTwitt = socialPost[i].twittPost;
            profileData = socialPost[i].postData;
            profilePostImg =socialPost[i].postImage;
            profilePostLikes = socialPost[i].postLikes;
            
        }

        // display in console profili
        console.log(profileImg);
        console.log(profileName);
        console.log(profileTwitt);
        console.log(profileData);
        console.log(profilePostImg);
        console.log(profilePostLikes);

        // - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
        publishPost.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${profileImg}" alt="${profileName}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${profileName}</div>
                        <div class="post-meta__time">${profileData} mesi fa</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${profileTwitt}</div>
            <div class="post__image">
                <img src="${profilePostImg}" alt="">
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
                        Piace a <b id="like-counter-1" class="js-likes-counter">${profilePostLikes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
        `

    };

    // - Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.

    likeButton.addEventListener('click',);