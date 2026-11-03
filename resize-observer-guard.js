(function(){
  function isROLoop(msg){ return typeof msg === 'string' && msg.indexOf('ResizeObserver loop') !== -1; }
  window.addEventListener('error', function(e){
    if (isROLoop(e && e.message)) { e.stopImmediatePropagation(); e.preventDefault(); }
  }, true);
  var origOnError = window.onerror;
  window.onerror = function(message){
    if (isROLoop(message)) return true;
    if (origOnError) return origOnError.apply(this, arguments);
    return false;
  };
})();
