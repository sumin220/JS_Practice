// CLICK EVENT
const submitBtn = document.querySelector('submit-btn');
const container = document.querySelector('form');
const title = document.querySelector('h2');

//Click
submitBtn.addEventListener('click', handleEvent);

// DoubleClick
submitBtn.addEventListener('doubleclick', handleEvent);

// MouseDown
submitBtn.addEventListener('mousedown', handleEvent);

// MouseUp
submitBtn.addEventListener('mouseup', handleEvent);

//MouseEnter
container.addEventListener('mouseenter', handleEvent);

//MouseLeave
container.addEventListener('mouseleave', handleEvent);

// Mousemove
container.addEventListener('mousemove', handleEvent);

//Event Handler
function handleEvent(e) {
    e.preventDefault();
    console.log('Event Type: ${e.type}');
    title.textContent='MouseX: ${e.offsetX} MouseY: ${e.offsetY}';
}