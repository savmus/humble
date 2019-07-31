export const createBlog = blog => (
    $.ajax({
        url: '/api/blogs',
        method: 'POST',
        data: { blog }
    })
);

export const fetchBlogs = () => (
    $.ajax({
        url: '/api/blogs',
        method: 'GET'
    })
);

export const fetchBlog = id => (
    $.ajax({
        url: `/api/blogs/${id}`,
        method: 'GET'
    })
);

export const updateBlog = blog => (
    $.ajax({
        url: `/api/blogs/${blog.id}`,
        method: 'PATCH',
        data: { blog }
    })
);

export const deleteBlog = id => (
    $.ajax({
        url: `/api/blogs/${id}`,
        method: 'DELETE'
    })
);