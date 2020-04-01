class Snowflake extends Thing {
    update() {
		this.y += 2;

		if (this.y > height) {
			this.y = -this.img.height;
		}
	}
}
