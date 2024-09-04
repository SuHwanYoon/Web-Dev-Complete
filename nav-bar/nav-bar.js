document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');
    const navLinks = document.querySelectorAll('nav a');

    function loadContent(url) {
        if (url === 'index.html' || url === '/') {
            // 홈 페이지의 경우 이미 로드된 콘텐츠를 사용
            return;
        }

        fetch(url)
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const mainContent = doc.querySelector('[role="main"]') || doc.body;
                content.innerHTML = mainContent.innerHTML;
            })
            .catch(error => {
                console.error('Error loading content:', error);
                content.innerHTML = '<p>Error loading content. Please try again.</p>';
            });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const url = this.getAttribute('href');
            loadContent(url);
            
            // Update URL without page reload
            history.pushState(null, '', url);
        });
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', function() {
        loadContent(window.location.pathname);
    });
});
</script>