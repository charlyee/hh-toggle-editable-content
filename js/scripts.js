
//https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content

//https://stackoverflow.com/questions/15993128/toggle-contenteditable-on-click

window.onload = function() {
    var element = document.getElementById('editable');
    //Toggle contenteEditable = true on click
    element.onclick = function(e) {
        this.contentEditable = true;
        this.focus();
        this.style.backgroundColor = '#E0E0E0';
        this.style.border = '1px dotted black';
    }
    //Toggle contenteEditable = false on mouse-out
    element.onmouseout = function() {
        this.style.backgroundColor = '#ffffff';
        this.style.border = '';
        this.contentEditable = false;
    }
}