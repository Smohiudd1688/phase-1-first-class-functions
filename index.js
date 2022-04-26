function receivesAFunction(example) {
    example();
}

function returnsANamedFunction() {
    return function foo () {
        console.log("Sup");
    }
}
function returnsAnAnonymousFunction() {
    return function () {
        console.log("Buh-bye");
    }
}