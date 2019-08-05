export const createFollow = follow => (
    $.ajax({
        url: '/api/follows',
        method: 'POST',
        data: { follow }
    })
);

export const deleteFollow = id => (
    $.ajax({
        url: `/api/follows/${id}`,
        method: 'DELETE'
    })
);