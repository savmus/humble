export const createFollow = follow => (
    $.ajax({
        url: `/api/blogs/${follow.followee_id}`,
        method: 'POST',
        data: { follow }
    })
);

export const deleteFollow = id => (
    $.ajax({
        url: `/api/blogs/${id}`,
        method: 'DELETE'
    })
);