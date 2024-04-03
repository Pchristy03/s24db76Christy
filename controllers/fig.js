var Fig = require("../models/fig");

// List all costumes
exports.fig_list = function(req, res) {
    res.send('NOT IMPLEMENTED: fig list');
};

// for a specific Costume. 
exports.fig_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: fig detail: ' + req.params.id);
};

    // Handle Costume create on POST. 
exports.fig_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: fig create POST'); 
};

    // Handle Costume delete from on DELETE. 
exports.fig_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: fig delete DELETE ' + req.params.id); 
};

    // Handle Costume update form on PUT. 
exports.fig_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: fig update PUT' + req.params.id); 
};