import { connect } from 'react-redux';
import Search from './search';

const mapStateToProps = ({ entities }) => {
    let blogArr = Object.values(entities.blogs);
    let titles = blogArr.map(blog => {
        return blog.title
    });

    return ({
        blogs: titles
    })
};

// const mapDispatchToProps = dispatch => ({
//     processForm: (user) => dispatch(login(user))
// });


export default connect(mapStateToProps, mapDispatchToProps)(Search);