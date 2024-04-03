var Fig = require("../models/fig");

// List all costumes
exports.fig_list = async function(req, res) {
    try {
        theFigs = await Fig.find()
        res.send(theFigs);
    } catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

//VIEWS
//Handle a show all view
exports.figs_view_all_page = async function(req, res) {
    try {
        theFigs = await Fig.find();
        res.render('fig', {title: 'Fig Search Results', results: theFigs });
    } catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`)
    }
}

// for a specific Costume. 
exports.fig_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: fig detail: ' + req.params.id);
};

    // Handle Costume create on POST. 
exports.fig_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Fig();
    document.name = req.body.name;
    document.size = req.body.size;
    document.age = req.body.age;
    document.is_poisonous = req.body.is_poisonous;

    try {
        let result = await document.save();
        res.send(result);
    } catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`)
    }
};

    // Handle Costume delete from on DELETE. 
exports.fig_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: fig delete DELETE ' + req.params.id); 
};

    // Handle Costume update form on PUT. 
exports.fig_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: fig update PUT' + req.params.id); 
};