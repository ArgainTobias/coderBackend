class Color {
    getRandomColor(){
        const red = Math.floor(Math.random()*255);
        const green = Math.floor(Math.random()*255);
        const blue = Math.floor(Math.random()*255);
        return `rgb(${red}, ${green}, ${blue})`
    }
}

const color = new Color();
console.log(color.getRandomColor());