const MAX_TITLE_LENGTH = 50; // Số ký tự tối đa cho tiêu đề

function shortenTitle(title) {
    if (title.length > MAX_TITLE_LENGTH) {
        return title.slice(0, MAX_TITLE_LENGTH) + '...';
    } else {
        return title;
    }
}

export { shortenTitle };