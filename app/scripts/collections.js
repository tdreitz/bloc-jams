console.log("collections.js is loaded");

var buildAlbumThumbnail = function () {
    var template = 
        

    return $(template);
};

if (document.URL.match(/\/collection.html/)) {
  // Wait until the HTML is fully loaded
  $(document).ready(function() {
    var $collection = (".collection-container .row");
    $collection.empty();
    $collection.append(buildAlbumThumbnail());
  });
}