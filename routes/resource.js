var express = require('express'); var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var fig_controller = require('../controllers/fig');

/// API ROUTE ///

// GET resources base.
router.get('/', api_controller.api);

/// FIG ROUTES ///

// POST request for creating a fig.
router.post('/fig', fig_controller.fig_create_post);

// DELETE request to delete fig.
router.delete('/fig/:id', fig_controller.fig_delete);

// PUT request to update fig.
router.put('/fig/:id', fig_controller.fig_update_put);

// GET request for one fig.
router.get('/fig/:id', fig_controller.fig_detail);

// GET request for list of all fig items.
router.get('/figs', fig_controller.fig_list);

module.exports = router;