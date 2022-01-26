const Router = require('express').Router;
const db = require('../db/connection');
const {ObjectId} = require('mongodb');

const router = Router();

router.get('/:id', async function(req, res){
   const id = new ObjectId(req.params.id);

   const note = await db.getDb().db().collection('notes').findOne({_id: id});

   res.render('notes/detail', {note});
});

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

router.get('/edit/:id', async function(req, res){
   const id = new ObjectId(req.params.id);

   const note = await db.getDb().db().collection('notes').findOne({_id: id});

   res.render('notes/edit', {note});
});

router.post('/delete/', (req, res) => {
   const data = req.body;
   const id = new ObjectId(data.id);

   db.getDb().db().collection('notes').deleteOne({_id: id});

   res.redirect(301, '/');
});

module.exports = router;