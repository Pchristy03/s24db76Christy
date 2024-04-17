var express = require('express');
const fig_controller = require('../controllers/fig');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    res.redirect("/login");
}

/* GET home page. */
router.get('/', fig_controller.figs_view_all_page);

// route to view fig details
router.get("/detail", fig_controller.fig_view_one_page);

// route for creating a fig
router.get('/create', fig_controller.fig_create_page);

router.get('/update', secured, fig_controller.fig_update_page);

router.get('/delete', fig_controller.fig_delete_page);
module.exports = router;
