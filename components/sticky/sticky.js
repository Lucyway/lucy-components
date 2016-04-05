//http://stackoverflow.com/a/17136693
var node = document.getElementById('side'),
    nodeOffs = node.offsetTop,
    parent = node;

while (parent = parent.offsetParent) {
    if (parent.offsetTop) {
        nodeOffs += parent.offsetTop;
    }
}

window.addEventListener('scroll', function(event) {
    var scrollPos = document.body.scrollTop;
    
    if (scrollPos > nodeOffs) {
        if (scrollPos < (document.body.scrollHeight - node.clientHeight - nodeOffs)) {
            node.classList.add("isSticky");
            node.style.top = (scrollPos - nodeOffs) + 'px';
        }
    } else {
        node.style.top = '0px';
        node.classList.remove("isSticky");
    }
})