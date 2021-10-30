
function swap(img){
    var tmp = document.images[0].src
    document.images[0].src = img.src
    img.src = tmp
}
position = 4;
function left()
{
    position--;
    if (position < 1){
    position = 4
    }
    document.images[0].src="../img/img" + position + ".webp";
}
function right()
{
    position++;
    if (position > 4){
    position = 1
    }
    document.images[0].src="../img/img" + position + ".webp";
}