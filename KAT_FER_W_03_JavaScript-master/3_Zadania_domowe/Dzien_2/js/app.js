var Tree = function (type) {
    console.log('type: ' + type);
};
Tree.prototype.bloom = function () {
    console.log('I am blooming');
};

var oak = new Tree ('leafy');
oak.bloom();

var  spruce = new Tree('conifer');
spruce.bloom();

var willow = new Tree('leafy');
willow.bloom();
