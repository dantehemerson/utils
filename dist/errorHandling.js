"use strict";
exports.__esModule = true;
exports.tryFunctionOrLogError = function (f) {
    try {
        return f();
    }
    catch (e) {
        if (console.error) {
            console.error(e);
        }
    }
};
// Apollo Client
function graphQLResultHasError(result) {
    return result.errors && result.errors.length;
}
exports.graphQLResultHasError = graphQLResultHasError;
