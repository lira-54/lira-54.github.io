document.addEventListener("DOMContentLoaded", function(event) {
    mdHelper.loadAsMarkdown('data/about.md', 'tab_content_about');
    mdHelper.loadAsMarkdown('data/news.md', 'tab_content_news');
    mdHelper.loadAsMarkdown('data/contact.md', 'tab_content_contact');
    mdHelper.loadAsMarkdown('data/ads1.md', 'tab_content_ads1');
});
