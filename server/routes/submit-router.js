const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');





// Adds new feedback to the database
// Request body must be a book object
router.post('/',  (req, res) => {
    let newFeedback = req.body;
    console.log(`Adding Feedback `, newFeedback);
  
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newFeedback.feelingReducer, newFeedback.understandingReducer, newFeedback.supportReducer, newFeedback.commentsReducer])
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error adding feedback`, error);
        res.sendStatus(500);
      });
  });


  module.exports = router;