const Router = require('express').Router;
const db = require('../db/connection');
const {ObjectId} = require('mongodb');

const router = Router();

router.get('/', (req, res) => {
   res.render('notes/create');
});

router.post('/', (req, res) => {
   const data = req.body;
   const title = data.title;
   const description = data.description;

   db.getDb()
     .db()
     .collection('notes')
     .insertOne({title: title, description: description});

   res.redirect(301, '/');
});

router.post('/delete/', (req, res) => {
   const data = req.body;
   const id = new ObjectId(data.id);

   db.getDb().db().collection('notes').deleteOne({_id: id});

   res.redirect(301, '/');
});

module.exports = router;