let searchBox = document.getElementById('search-bar');

searchBox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // prevent default form behavior
        let query = searchBox.value.trim();
        if (query) {
            // redirect to results.html with query string
            let searchUrl = 'results.html?q=' + encodeURIComponent(query);
            window.location.href = searchUrl;
        }
    }
});
