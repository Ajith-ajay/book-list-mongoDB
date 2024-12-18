const express = require('express');
const bookModel = require('../models/book models');

const app = express.Router();

app.get('/',async (req,res)=>{
    let message = '';
    let edit_id,edit_book;

    if(req.query.edit_id){
        edit_id = req.query.edit_id;
        edit_book = await bookModel.findById(edit_id);
    }

    if(req.query.delete_id) {
        await bookModel.findByIdAndDelete(req.query.delete_id);
        return res.redirect('/?status=3')
    }

    switch (req.query.status) {
        case '1':
            message = 'Book Added Successfully';
            break;
        case '2':
            message = 'Book Updated Successfully';
            break;
        case '3':
            message = 'Book Deleted Successfully';
            break;
        default:
            break;
    }

    const books = await bookModel.find({});
    res.render('index',{
        message,
        edit_id,
        edit_book,
        books
    })
});

app.post('/add-book',(req,res)=>{
    const book = new bookModel({ title:req.body.title , author:req.body.author});
    book.save();
    return res.redirect('/?status=1');
})

app.post('/edit-book/:edit_id',async (req,res)=>{
    const edit_id = req.params.edit_id;
    await bookModel.findOneAndUpdate({_id : edit_id},{ title:req.body.title ,author:req.body.author });           
    return res.redirect('/?status=2');
})

module.exports = app;