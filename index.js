module.exports = function walk (obj) {
    if (!obj || typeof obj !== 'object') return obj;
    if (Array.isArray(obj)) return obj.map(walk);
    return Object.keys(obj).reduce(function (acc, key) {
        var camel = key[0].toLowerCase() + key.slice(1).replace(/([A-Z])/g, function (m, x) {
            return '_' + x.toLowerCase();
        });
        acc[camel] = walk(obj[key]);
        return acc;
    }, {});
};
