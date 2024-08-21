console.log('Script loaded from Github Pages');

function addRandomElements() {
    const elements = [
        { type: 'button', text: 'Click me', onclick: () => console.log('Hey') },
        { type: 'script', code: 'console.log(\'This is an inline script\');' },
        { type: 'button', text: 'Click me', onclick: () => alert('You clicked me') },
        { type: 'script', code: 'console.log(\'Another inline script\');' },
        { type: 'button', text: 'Click me', onclick: () => console.log('Hello') },
        { type: 'script', code: 'console.log(\'Yet another inline script\');' }
    ];

    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    const div = document.createElement("div");

    if (randomElement.type === 'button') {
        const button = document.createElement("button");
        button.textContent = randomElement.text;
        button.addEventListener("click", randomElement.onclick);
        div.appendChild(button);
    } else if (randomElement.type === 'script') {
        const script = document.createElement("script");
        script.textContent = randomElement.code;
        div.appendChild(script);
    }

    document.body.appendChild(div);
}

// Ajouter des éléments aléatoires toutes les 5 secondes
setInterval(addRandomElements, 5000);
