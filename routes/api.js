var express = require('express');
var mongoose = require('mongoose');
var db = 'mongodb://localhost:27017/videoplayer';
mongoose.connect(db, (err)=>{(err)?(console.log(err,'mongodb con fail')):(console.log('con to mongo'))});
var Video = require('../models/video');

var router = express.Router();

router.get('/video', (req,res)=>{
	Video.find({}, (err,data)=>{
		(err)?(res.json({m:err,d:[]})):
		(res.json({m:'success', d:data}))
	});
});

router.post('/video', (req,res)=>{
	var newVid = new Video();
	newVid.title= req.body.title;
	newVid.url= req.body.url;
	newVid.description= req.body.description;

	newVid.save((err,data)=>{
		(err)?(res.json({err:err})):(res.json(data))
	});

});

router.get('/video/:id',(req,res)=>{
	Video.findById(req.params.id, (err,data)=>{
		(err)?(res.json(err)):
		(res.json({m:'updated', d:data}))
	});
});

router.put('/video/:id', (req,res)=>{
	Video.findByIdAndUpdate(req.params.id, 
		{$set:{
			title: req.body.title,
			url: req.body.url,
			description: req.body.description
		}},
		{new:true},
		(err,data)=>{
			(err)?(res.json({err:err})):(res.json(data))	
		});
});

router.delete('/video/:id', (req,res)=>{
	Video.findByIdAndRemove(req.params.id, (err,data)=>{
		(err)?(res.json(err)):(res.json(data))
	});
});



module.exports = router;