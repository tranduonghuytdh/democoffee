const mongoose = require('mongoose');

async function connect() {

    try {
        await mongoose.connect('mongodb://localhost:27017/coffee', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connect successfully");
    } catch (error) {
        console.log("Connect faiture");
    }

}

module.exports = { connect }