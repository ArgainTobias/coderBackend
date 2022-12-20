class Color {
    randomColor():string {
        const red: number = Math.floor(Math.random()*255);
        const green: number = Math.floor(Math.random()*255);
        const blue: number = Math.floor(Math.random()*255);
        return `rgb(${red}, ${green}, ${blue})`
    }
}

const color = new Color();
console.log(color.randomColor());