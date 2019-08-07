export const createLike = id => $.ajax({
    url: '/api/likes',
    method: 'POST',
    data: { id },
    success: (data) => {
        location.reload();
    }
});

export const deleteLike = id => $.ajax({
    url: '/api/likes',
    method: 'DELETE',
    data: { id },
    success: (data) => {
        location.reload();
    }
});