function Bubble (x, y, img) {
    this.x = x;
    this.y = y;
    this.img = img;
    
    this.display = function () {
        imageMode(CORNER);
     img.resize(500,400)
        image(img, this.x, this.y);
       
    }
    
 }