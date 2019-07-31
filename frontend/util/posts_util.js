export const createPost = post => (
    $.ajax({
        url: `/api/blogs/${post.blog_id}/posts`,
        method: 'POST',
        data: { post }
    })
);

export const fetchPosts = blog => (
    $.ajax({
        url: `/api/blogs/${blog.id}/posts`,
        method: 'GET'
    })
);

export const updatePost = post => (
    $.ajax({
        url: `/api/posts/${post.id}`,
        method: 'PATCH',
        data: { post }
    })
);

export const deletePost = id => (
    $.ajax({
        url: `/api/posts/${id}`,
        method: 'DELETE'
    })
);