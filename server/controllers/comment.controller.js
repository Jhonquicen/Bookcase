const Comment = require("../models/comment.model");

module.exports.create_comment = (req, res) => {
    Comment.create(req.body)
        .then(comment => res.json(comment))
        .catch(err => {
            console.log(err)
            res.status(400).json(err);
        });
}