const mongoose = require("mongoose");
const Book = require("../models/book.model");

module.exports.get_all = async (req, res) => {
    let books = await Book.find().populate("comentarios");
    res.json(books);
}

module.exports.get_by_ids = async (req, res) => {
    const filter = req.params.ids.split(',').map(id=> mongoose.Types.ObjectId(id));
    let books = await Book.find({
        '_id': { $in: filter }
    }).populate("comentarios");
    res.json(books);
}

module.exports.create_book = (req, res) => {
    Book.create(req.body)
        .then(book => res.json(book))
        .catch(err => {
            console.log(err)
            res.status(400).json(err);
        });
}

module.exports.add_comment = (req, res) => {
    console.log(req.body)
    Book.findByIdAndUpdate({_id: req.params.id}, {$push:{comentarios:req.body.id}}, {new:true, runValidators:true})
        .then(book => res.json(book))
        .catch(err => res.status(400).json(err));
}

module.exports.get_book = (req, res) => {
    Book.findOne({_id: req.params.id}).populate('comentarios')
        .then(book =>{
            const bookcase = res.json(book);
            console.log(bookcase);
            return bookcase
        })
        .catch(err => res.status(400).json(err));
}

module.exports.update_book = (req, res) => {
    Book.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(book => res.json(book))
        .catch(err => res.status(400).json(err));
}

module.exports.delete_book = (req, res) => {
    Book.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
}