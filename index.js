const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postsEl = document.getElementById('posts')
let placeholderEl = ''
for(let post of posts) {
    placeholderEl += `
        <div class="post">
            <div class="post-title">
                <img class="post-avatar" src="images/avatar-vangogh.jpg" >
                <div class="post-info">
                    <p class="post-author strong">${post.name}</p>
                    <p class="post-origin">${post.location}</p>
                </div>
            </div>
            <img class="post-post" src=${post.post}>
            <div class="icons">
                <img class="icon" src="images/icon-heart.png">
                <img class="icon" src="images/icon-comment.png">
                <img class="icon" src="images/icon-dm.png">
            </div>
            <p class="post-likes strong">${post.likes} likes</p>
            <p class="post-comment"><span class="strong">${post.username}</span> ${post.comment}</p>
            <div class="empty"></div>
        </div>
    `
}
postsEl.innerHTML = placeholderEl
