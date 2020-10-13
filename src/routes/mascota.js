const express = require('express');
const router = express.Router();
const mascotaController = require('../controllers/mascota.controller');
router.get('/', mascotaController.list);
router.post('/add',mascotaController.save );
router.get('/delete/:id', mascotaController.delete );
router.get('/update/:id', mascotaController.edit);
router.post('/update/:id', mascotaController.update );

module.exports = router;