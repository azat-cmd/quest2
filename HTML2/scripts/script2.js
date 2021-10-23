
function swap(img){
    var tmp = document.images[0].src
    document.images[0].src = img.src
    img.src = tmp
}