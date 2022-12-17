const BookController = require("../controllers/book.controller");
const UserController= require("../controllers/user.controller");
const CommentController = require("../controllers/comment.controller");

const {authenticate, authenticate_admin} = require("../config/jwt.config");

module.exports = app => {
    app.get('/api/bookcase', authenticate_admin, BookController.get_all);
    app.get('/api/bookcases/:ids', BookController.get_by_ids);
    app.post('/api/bookcase', BookController.create_book);
    app.get('/api/bookcase/:id', BookController.get_book);
    app.put('/api/bookcase/:id', authenticate_admin, BookController.update_book);
    app.delete('/api/bookcase/:id', BookController.delete_book);
    app.put('/api/bookcase/add_comment/:id', BookController.add_comment);

    app.post('/api/register', UserController.register);
    app.post('/api/login', UserController.login);
    app.get('/api/logout', UserController.logout);

    app.post('/api/comment/:id', CommentController.create_comment);

}


