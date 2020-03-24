class Snowflake extends Thing {
    update() {
        this.y += 2;
        if (this.y > width) {
            this.y = -this.img.height;
        }
    }

}
