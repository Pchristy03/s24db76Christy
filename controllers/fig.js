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
exports.fig_detail = async function(req, res) {
    console.log("detail " + req.params.id)
    try {
        result = await Fig.findById(req.params.id)
        res.send(result)
    } catch (error){
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }

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
exports.fig_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)

    try {
    let toUpdate = await Fig.findById(req.params.id);

    // update the properties
    if (req.body.name) toUpdate.name = req.body.name;
    if (req.body.size) toUpdate.size = req.body.size;
    if (req.body.age) toUpdate.age = req.body.age;
    if (req.body.is_poisonous) toUpdate.is_poisonous = req.body.is_poisonous;

    let result = await toUpdate.save();
    res.send(result)
    console.log("Success: " + result);
    } catch(error) {
        res.status(500)
        res.send(`{"error": ${error}: Update for id ${req.params.id} failed }`)
    }
};