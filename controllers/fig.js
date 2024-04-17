var Fig = require("../models/fig");

// List all figs
exports.fig_list = async function (req, res) {
    try {
        theFigs = await Fig.find()
        res.send(theFigs);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

//VIEWS
//Handle a show all view
exports.figs_view_all_page = async function (req, res) {
    try {
        theFigs = await Fig.find();
        res.render('fig', { title: 'Fig Search Results', results: theFigs });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`)
    }
}

exports.fig_view_one_page = async function (req, res) {
    try {
        selectedFig = await Fig.findById(req.query.id)
        res.render('figdetail', { title: 'Fig Detail', toShow: selectedFig });
    } catch (err) {
        res.status(500)
        res.send(`{ "error": "${err}"}`)
    }
};

// Handle building the view for creating a fig. // No body, no in path parameter, no query.
// Does not need to be async 
exports.fig_create_page = function (req, res) {
    console.log("create view")
    try {
        res.render('figcreate', { title: 'Fig Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

exports.fig_update_page = async function(req, res) {
    console.log("update view for item " + req.query.id)

    try {
        let result = await Fig.findById(req.query.id)
        console.log(result);
        res.render('figupdate', {title: 'Fig Update', toShow: result });
    } catch (err) {
        res.status(500)
        res.send(`{"error": "${err}"}`)
    }
};

exports.fig_delete_page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)

    try {
        let result = await Fig.findById(req.query.id)
        res.render("figdelete", {title: "Fig Delete", toShow: result });
    } catch(err) {
        res.status(500)
        res.send( `{"error": "${err}"}`);
    }
}

// for a specific Fig. 
exports.fig_detail = async function (req, res) {
    console.log("detail " + req.params.id)
    try {
        result = await Fig.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": "document for id ${req.params.id} not found"}`);
    }

};

// Handle fig create on POST. 
exports.fig_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Fig();
    document.name = req.body.name;
    document.size = req.body.size;
    document.age = req.body.age;
    document.is_poisonous = req.body.is_poisonous;

    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`)
    }
};

// Handle fig delete from on DELETE. 
exports.fig_delete = async function (req, res) {
    console.log("Delete " + req.params.id)
    try {
        let result = await Fig.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle fig update form on PUT. 
exports.fig_update_put = async function (req, res) {
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
    } catch (error) {
        res.status(500)
        res.send(`{"error": ${error}: Update for id ${req.params.id} failed }`)
    }
};