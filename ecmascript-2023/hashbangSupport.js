//     <ul>
//         <li><a href="#/home">Home</a></li>
//         <li><a href="#/about">About</a></li>
//         <li><a href="#/contact">Contact</a></li>
//     </ul>

//     <div id="content"></div>

function loadContent(hash) {
    const contentDiv = document.getElementById('content');
    switch(hash) {
        case 'home':
            contentDiv.innerHTML = '<h1>Home Page</h1>';
            break;
        case 'about':
            contentDiv.innerHTML = '<h1>About Page</h1>';
            break;
        case 'contact':
            contentDiv.innerHTML = '<h1>Contact Page</h1>';
            break;
        default:
            contentDiv.innerHTML = '<h1>Page Not Found</h1>';
    }
}

window.addEventListener('hashchange', function() {
    const hash = window.location.hash.substring(1); // Remove the '#' symbol
    loadContent(hash);
});

// Initial content load
loadContent(window.location.hash.substring(1));

// When you click on the links, the hash of the URL changes, triggering the hashchange event. 
// The loadContent function then dynamically loads content based on the hash.