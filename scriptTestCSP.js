console.log('Script loaded from Github Pages');

function addRandomElements() {
    const elements = [
        '<button onclick="console.log(\'Hey\')">Click me</button>',
        '<script>console.log(\'This is an inline script\');</script>',
        '<button onclick="alert(\'You clicked me\')">Click me</button>',
        '<script>console.log(\'Another inline script\');</script>',
        '<button onclick="console.log(\'Hello\')">Click me</button>',
        '<script>console.log(\'Yet another inline script\');</script>'
    ];

    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    const div = document.createElement("div");
    div.innerHTML = randomElement;
    document.body.appendChild(div);
}

// Ajouter des éléments aléatoires toutes les 5 secondes
setInterval(addRandomElements, 5000);
