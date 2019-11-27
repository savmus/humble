# Humble

Visit Humble live: [Humble](https://humble-app.herokuapp.com/#/)

Humble is a single-page web application inspired by the blogging platform, Tumblr.

![Humble](./screenshots/home.png)

## Technologies

### Backend
— RESTful structure

— Associations (Join tables and foreign keys)

— Receives AJAX requests
* Ruby on Rails — Framework
* PostgreSQL — Database
* JBuilder — Generating and rendering JSON objects

```rb
def create
  @post = Post.new(post_params)
  @post.author_id = current_user.id

  if @post.save
    render 'api/posts/index'
  else
    render json: @post.errors.full_messages, status: 401
  end
end
```

### Frontend
— Redux cycle

— React router
  * JavaScript — Primary language
  * React — Re-rendering without page refreshes
  * jQuery — AJAX requests to backend
  * HTML — DOM structure
  * CSS — Styling

```js
handleSubmit(e) {
  e.preventDefault();

  let post = Object.assign({}, this.state);
  this.props.action(post);

  this.setState({
      title: "",
      description: ""
  });
  
  document.getElementById('close-text').click();
}
```

### Hosting
  * Docker
  * Heroku Container Registry

## Features

* Sign up, login, or demo the site.
![Humble](./screenshots/sign_up.png)
* Create multimedia blog posts.
![Humble](./screenshots/multimedia.png)
* Follow and unfollow other blogs.
![Humble](./screenshots/following.png)
* Like and unlike blog posts.
![Humble](./screenshots/likes.png)
* Individual blogs for each user.
![Humble](./screenshots/blog.png)
* Dashboard containing posts from blogs you follow.
![Humble](./screenshots/dashboard.png)

## Future Features

 * Reblog other user's posts to your blog.
 * Comment on blog posts.
 * Search for blogs.