var express = require('express');
const fig_controller = require('../controllers/fig');
var router = express.Router();

/* GET home page. */
router.get('/', fig_controller.figs_view_all_page);
module.exports = router;
