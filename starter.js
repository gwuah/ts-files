function Greeter(name) {
    this.name = name;
}
Greeter.prototype.greet = function () {
    console.log("Hello " + this.name);
};
var g = new Greeter(["oop"]);
