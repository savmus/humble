export const createFollow = id => (
    $.ajax({
        url: '/api/follows',
        method: 'POST',
        data: { id }
    })
);

export const deleteFollow = id => (
    $.ajax({
        url: '/api/follows',
        method: 'DELETE',
        data: { id }
    })
);