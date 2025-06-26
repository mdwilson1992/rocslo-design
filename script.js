function toggleContent() {
    const contentWrapper = document.querySelector('.expandable_content_wrapper');
    const icon = document.querySelector('.image-down-icon');

    // Toggle the content visibility
    contentWrapper.classList.toggle('open');

    // Rotate the icon when content is expanded
    icon.classList.toggle('rotate');
}


