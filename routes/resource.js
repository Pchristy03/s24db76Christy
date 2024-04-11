var express = require('express'); var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var fig_controller = require('../controllers/fig');

/// API ROUTE ///

// GET resources base.
router.get('/', api_controller.api);

/// COSTUME ROUTES ///

// POST request for creating a Costume.
router.post('/fig', fig_controller.fig_create_post);

// DELETE request to delete Costume.
router.delete('/fig/:id', fig_controller.fig_delete);

// PUT request to update Costume.
router.put('/fig/:id', fig_controller.fig_update_put);

// GET request for one Costume.
router.get('/fig/:id', fig_controller.fig_detail);

// GET request for list of all Costume items.
router.get('/figs', fig_controller.fig_list);

// route to view fig details
router.get("/detail", fig_controller.fig_view_one_page);

// route for creating a fig
router.get('/create', fig_controller.fig_create_page);

router.get('/update', fig_controller.fig_update_page);

router.get('/delete', fig_controller.fig_delete_page);

module.exports = router;