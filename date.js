exports.getDate = function() {
    const option = { weekday: "long", day: "numeric", month: 'long', year: "numeric" };
    const currentDate = new Date();
    return currentDate.toLocaleDateString('en-US', option);
}

exports.getDay = function() {
        const option = { weekday: "long" };
        const currentDate = new Date();
        return currentDate.toLocaleDateString('en-US', option);
    }
    // console.log(module.exports);