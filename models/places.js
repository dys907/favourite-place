class Place {
    constructor(title, imageUri, address, location) {
        this.title = title;
        this.imageUri = imageUri
        this.address = address
        this.location = location // {lat: 0.1114, long: 0.01212}
        this.id = new Date().toString() + Math.random().toString()
    }
}