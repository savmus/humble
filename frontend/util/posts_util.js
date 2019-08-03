export const createPost = post => (
    $.ajax({
        url: `/api/users/${post.user_id}/posts`,
        method: 'POST',
        data: { post },
        success: (data) => {
            location.reload();
        }
    })
);

export const fetchPost = id => (
    $.ajax({
        url: `/api/posts/${id}`,
        method: 'GET'
    })
);

export const fetchUserPosts = user => (
    $.ajax({
        url: `/api/users/${user.id}/posts`,
        method: 'GET'
    })
);

export const fetchPosts = () => (
    $.ajax({
        url: '/api/posts',
        method: 'GET'
    })
)

export const updatePost = post => (
    $.ajax({
        url: `/api/posts/${post.id}`,
        method: 'PATCH',
        data: { post },
        success: (data) => {
            location.reload();
        }
    })
);

export const deletePost = id => (
    $.ajax({
        url: `/api/posts/${id}`,
        method: 'DELETE',
        success: (data) => {
            location.reload();
        }
    })
);