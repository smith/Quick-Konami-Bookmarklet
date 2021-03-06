/** 
 * Bookmarklet to simulate the Konami code 
 * @author Nathan L Smith
 * @date June 8, 2009
 */

/*global window, document */

(function () {
var k = { u : 38, d : 40, l : 37, r : 39, a : 65, b : 66 }, 
    keys = ["u", "u", "d", "d", "l", "r", "l", "r", "b", "a"],
    evtArgs = ["keydown", 1, 1, window, 0, 0, 0, 0, null, 0],
    evt = document.createEvent("KeyboardEvent");

for (var i = 0; i < keys.length; i += 1) {
    evtArgs.splice(evtArgs.length - 2, 2, k[keys[i]], 0);
    evt.initKeyEvent.apply(evt, evtArgs);
    document.body.dispatchEvent(evt);
}
})();

