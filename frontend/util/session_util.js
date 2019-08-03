export const signup = user => (
    $.ajax({
        url: '/api/users',
        method: 'POST',
        data: { user },
        success: (data) => {
            location.reload();
        }
    })
);

export const login = user => (
    $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { user },
        success: (data) => {
            location.reload();
        }
    })
);

export const logout = () => (
    $.ajax({
        url: '/api/session',
        method: 'DELETE',
        success: (data) => {
            location.reload();
        }
    })
);