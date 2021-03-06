const express = require('express');
const Event = require('../models/event');

const router = express.Router();

router.route('/events')
  .post((req, res) => {
    const event = new Event({
      type: req.body.type,
      date: req.body.date,
      title: req.body.title,
      speaker: req.body.speaker,
      host: req.body.host,
    });

    event.save((err) => {
      if (err) {
        return res.send(err);
      }

      return res.json(event);
    });
  })
  .get((req, res) => {
    Event.find({}).sort({ createdAt: -1 })
    .exec((err, task) => {
      if (err) {
        return res.send(err);
      }
      return res.json(task);
    });
  });

router.route('/events/:id')
  .get((req, res) => {
    Event.findById(req.params.id, (err, task) => {
      if (err) {
        return res.send(err);
      }
      return res.json(task);
    });
  })
  .put((req, res) => {
    Event.findByIdAndUpdate(req.params.id, {
      type: req.body.type,
      date: req.body.date,
      title: req.body.title,
      speaker: req.body.speaker,
      host: req.body.host,
    }, (err) => {
      if (err) {
        return res.send(err);
      }
      return res.json({ message: 'Event updated successfully' });
    });
  })
  .delete((req, res) => {
    Event.remove({ _id: req.params.id }, (err) => {
      if (err) {
        return res.send(err);
      }
      return res.json({ message: 'Event has been removed!' });
    });
  });

module.exports = router;
