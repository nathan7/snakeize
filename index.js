module.exports = function walk (obj) {
    if (!obj || typeof obj !== 'object') return obj;
    if (Array.isArray(obj)) return obj.map(walk);
    return Object.keys(obj).reduce(function (acc, key) {
        var camel = key.replace(/[_.-](\w|$)/g, function (_,x) {
            return x.toUpperCase()
        });
        acc[camel] = walk(obj[key]);
        return acc;
    }, {});
};
