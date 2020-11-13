// ************************* General ************************* //

//Variables
const appOpeningView = document.getElementById('app-opening');
const noPostsView = document.getElementById('no-posts-container');
const backdrop = document.getElementById('backdrop');
const bottomNav = document.getElementById('bottom-nav');


//App Opening Sequence
setTimeout(function() { 
    appOpeningView.classList.add('hide');
}, 2000);

// Backdrop
const toggleBackdropHandler = component => {
    backdrop.style.display = backdrop.style.display === 'block' ? 'none' : 'block';

    // Determine where backdrop is being called
    switch(component) {
        case 'addpost': 
            backdrop.onclick = evt => {
                toggleAddPostFieldHandler();
            };
            break;
        case 'menu':
            backdrop.onclick = evt => { 
                toggleSideDrawerHandler();
            }
            break;
        
        default:
            backdrop.style.display === 'none';
    }
}


// ************************* Show New Post Input + Add new Post ************************* //

//Variables - Bottom Nav Elements
const addPostBtn = document.getElementById('add-post-btn');
const newPostBox = document.getElementById('new-post-container');

// Variables - Input Field Elements
const dismissAddNewBtn = document.getElementById('dismiss-new-post-btn');
const newPostForm = document.getElementById('new-post-form');
const newPostCaption = document.getElementById('txt-new-post');
const newPostAttachment = document.getElementById('post-attachment');
const publishPostBtn = document.getElementById('publish-post-btn');

// Toggle Input Field + Bottom Nav when Clicking Add
const toggleAddPostFieldHandler = () => {
    toggleBackdropHandler('addpost');
    
    if (!newPostBox.classList.contains('show')) {
        bottomNav.classList.add('hide');
        newPostBox.classList.add('show');
    } else {
        bottomNav.classList.remove('hide');
        newPostBox.classList.remove('show');
    }
}
dismissAddNewBtn.addEventListener('click', toggleAddPostFieldHandler, false);

// Show Input Field for New post
const showAddNewFormHandler = () => {
    let previewImages = document.querySelector('.new-post-caption').querySelector('.attached-files-container');
    toggleAddPostFieldHandler();

    //Reset Form + remove attached images
    newPostForm.reset();
    previewImages != null ? previewImages.remove() : null;
    publishPostBtn.disabled = true;

    // Disable Publish button depending on Input
    newPostCaption.addEventListener('input', evt => {
        publishPostBtn.disabled = false;
    })
    newPostAttachment.addEventListener('change', evt => {
        publishPostBtn.disabled = false;

        // Preview Selected Images
        let previewContainer = document.querySelector('.new-post-caption');
        let selectedImgs = createImgSrcHandler([...newPostAttachment.files]);
        previewContainer.appendChild(selectedImgs);
    })
}
addPostBtn.addEventListener('click', showAddNewFormHandler, false)

//Post Card + append to wrapper
const createNewPostHandler = formData => {
    const cardsWrapper = document.querySelector('.cards-wrapper');
    const card_orig = document.querySelector('.card-item-orig');
    const card_c = card_orig.cloneNode(true);

    card_c.classList.remove('card-item-orig');
    card_c.classList.add('card-item');

    const dateStamp = card_c.querySelector('.date-stamp');
    const caption = card_c.querySelector('.caption');
    const attachment = card_c.querySelector('.card-attachment');

    // Like - Available Card action
    const likeBtn = card_c.querySelector('.like-btn');
    const likeCounts = card_c.querySelector('.likes').querySelector('.count');

    // Apply Received Form Data
    dateStamp.innerText = formData.date;
    caption.style.display = 'none';
    attachment.style.display = 'none';

    //Check which has content
    if (formData.attachment.length) {
        attachment.style.display = 'block';
        let imgSrcs = createImgSrcHandler(formData.attachment);
        attachment.appendChild(imgSrcs);
    }

    if (formData.caption) {
        caption.style.display = 'block';
        caption.innerText = formData.caption;
    }

    //Add Cloned Card to wrapper (newest first)
    cardsWrapper.prepend(card_c);

    // Add Click on Like icon after append
    likeBtn.addEventListener('click', evt => {
        toggleLikeBtnHandler(likeBtn,likeCounts);
    }, false);

    //Highlight newly added Quack
    setTimeout(function() { 
        card_c.classList.add('no-highlight');
    }, 1000);

};

// SAVE/PUBLISH New Post Form
publishPostBtn.addEventListener('click', evt => {
    evt.preventDefault();

    const todayDate = new Date();
    const dateFormatted = todayDate.toLocaleString('default',{ month: 'long', day: 'numeric', year: 'numeric' });
    let formData = new FormData();

    formData.caption = newPostCaption.value;
    formData.attachment = [...newPostAttachment.files];
    formData.date = dateFormatted;

    noPostsView.style.display = 'none';

    createNewPostHandler(formData);
    toggleAddPostFieldHandler();

    // Scroll to Top to see newest Quack
    window.scrollTo(0, 0);
})

// Create URL Source for Images and return
const createImgSrcHandler = files => {
    let previewImages = document.querySelector('.new-post-caption').querySelector('.attached-files-container');
    previewImages != null ? previewImages.remove() : null;

    let attachmentContainer = document.createElement('div');
    attachmentContainer.classList.add('attached-files-container');

    for (let file of files) {
        let img = document.createElement('img');
        let imgContainer = document.createElement('div');

        imgContainer.classList.add('img-container');
        img.src = URL.createObjectURL(file)

        imgContainer.appendChild(img)
        attachmentContainer.appendChild(imgContainer)
    };

    return attachmentContainer;
};

// ************************* Card Interactions - Likes ************************* //
const toggleLikeBtnHandler = (icon, countEl) => {
    let countText = Number(countEl.innerText);

    if(icon.classList.contains('liked')) {
        icon.classList.remove('liked');
        countText--;
    } else {
        icon.classList.add('liked');
        countText++;
    }
    countEl.innerText = countText.toString();
};

// ************************* Toggle Side Menu ************************* //

//Variables - Toggle Side menu
const sideDrawer = document.getElementById('side-drawer');
const sideDrawerToggle = document.getElementById('side-drawer-toggle');

//Variables - For Dark Mode Toggle
const modeToggle = document.getElementById('mode-toggle');
const customizeEls = document.getElementsByClassName('changeable-item');

const toggleSideDrawerHandler = () => {
    toggleBackdropHandler('menu');

    if(sideDrawer.classList.contains('open')) {
        sideDrawer.classList.remove('open')
        sideDrawer.classList.add('close')
    } else {
        sideDrawer.classList.remove('close')
        sideDrawer.classList.add('open')
    }
}
sideDrawerToggle.addEventListener('click', toggleSideDrawerHandler, false);

// ************************* Toggle Dark Mode ************************* //
const toggleModeHandler = () => {
    for(let el of customizeEls) {
        if(el.classList.contains('dark-mode')) {
            el.classList.remove('dark-mode');
        } else {
            el.classList.add('dark-mode');
        }
    };
}

modeToggle.addEventListener('change', evt => {
    evt.preventDefault();
    toggleModeHandler()
});  