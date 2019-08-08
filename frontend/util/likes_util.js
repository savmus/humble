export const createLike = id => $.ajax({
    url: '/api/likes',
    method: 'POST',
    data: { id }
});

export const deleteLike = id => $.ajax({
    url: '/api/likes',
    method: 'DELETE',
    data: { id }
});