export const fetchUser = id => (
    $.ajax({
        url: `/api/users/${id}`,
        method: 'GET'
    })
);

export const fetchUsers = () => (
    $.ajax({
        url: '/api/users',
        method: 'GET'
    })
)

export const updateUser = user => (
    $.ajax({
        url: `/api/users/${user.id}`,
        method: 'PATCH',
        data: { user },
        success: (data) => {
            location.reload();
        }
    })
);

export const deleteUser = id => (
    $.ajax({
        url: `/api/users/${id}`,
        method: 'DELETE',
        success: (data) => {
            location.reload();
        }
    })
);