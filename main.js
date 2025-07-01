

!function() {
  var t = window.driftt = window.drift = window.driftt || [];
  if (!t.init) {
    if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
    t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
    t.factory = function(e) {
      return function() {
        var n = Array.prototype.slice.call(arguments);
        return n.unshift(e), t.push(n), t;
      };
    }, t.methods.forEach(function(e) {
      t[e] = t.factory(e);
    }), t.load = function(t) {
      var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
      o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
      var i = document.getElementsByTagName("script")[0];
      i.parentNode.insertBefore(o, i);
    };
  }
}();
drift.SNIPPET_VERSION = '0.3.1';
drift.load('se38xhp8wtam');

<!-- Add this style block to your HTML, preferably within the <head> section -->
<style>
  /*
   * This CSS targets the main container of the Drift widget.
   * Drift typically uses a fixed position for its widget.
   * We are overriding the 'right' property and setting 'left' to position it.
   */
  .drift-widget-container {
    /* Ensure the position is fixed so it stays in place when scrolling */
    position: fixed !important;

    /* Set the distance from the left edge of the viewport */
    left: 20px !important; /* Adjust this value as needed for desired spacing */

    /* Remove any 'right' positioning that might be present by default */
    right: auto !important;

    /* Keep the widget at the bottom, or adjust as needed */
    bottom: 20px !important; /* Adjust this value as needed for desired spacing */

    /* Ensure it's above other content if there are z-index conflicts */
    z-index: 99999 !important;
  }

  /*
   * Some Drift versions might use a different selector or have nested elements.
   * If the above doesn't work, you might need to inspect the element on your live site
   * to find the exact class or ID of the main widget container.
   * Common alternatives might include:
   * #drift-widget
   * .drift-frame-controller
   *
   * If you find a different class/ID, replace `.drift-widget-container` with that selector.
   */
</style>
