const BookController = require("../controllers/book.controller");

module.exports = app => {
    app.get('/api/bookcase', BookController.get_all);
    app.post('/api/bookcase', BookController.create_book);
    app.get('/api/bookcase/:id', BookController.get_book);
}


