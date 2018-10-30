// Event Listeners
let inputs = document.querySelectorAll('.controls input');
inputs.forEach(function(input) {
    input.addEventListener('change', changeElements);
    input.addEventListener('mousemove', changeElements);
});

// Functions
function changeElements() {
    let suffix = this.dataset.sizing || '';
    
    console.log(this.value);
    console.log(suffix);

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}