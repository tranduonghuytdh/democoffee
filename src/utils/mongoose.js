module.exports = {
    mutipleMongosseToObject: function (mongooses) {
        return mongooses.map(mongooses => mongooses.toObject())
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose
    }
}