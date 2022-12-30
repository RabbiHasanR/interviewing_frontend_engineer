// change scope using:
// call()
// apply()
// bind()


// Implement Function.prototype.bind()

/*
    const foo = function() {
        console.log(this.bar);
    }
    let baz = foo.bind({bar: 'hello'})
    baz(); // Hello
*/

// For solution you have to know scope, context , call and apply

Function.prototype.bind = function (context) {
    const fn = this;

    return function () {
        fn.call(context)
    }
}

const foo = function() {
    console.log(this.bar);
}
let baz = foo.bind({bar: 'hello'})
baz(); 


