class Cicle {
    constructor(nom) {
        this.nom = nom;
        this.numEdicions = 0;
        this.lastEditDate = null;
        this.moduls = [];
    }

    setNumEdicions() {
        this.numEdicions++;
        this.lastEditDate = new Date();
    }

    addModul(modul) {
        this.moduls.push(modul);
        this.moduls.sort((a, b) => a.num - b.num);
    }

    calcularHores() {
        return this.moduls.reduce((total, modul) => total + modul.hores, 0);
    }

    toString() {
        const modulsStr = this.moduls.map(modul => modul.toString()).join(', ');
        return `Cicle: ${this.nom}, Edicions: ${this.numEdicions}, Última edició: ${this.lastEditDate}, Mòduls: [${modulsStr}]`;
    }
}

class Modul {
    constructor(num, nom, hores) {
        this.num = num;
        this.nom = nom;
        this.hores = hores;
    }

    toString() {
        return `MP${this.num}. ${this.nom} (${this.hores}h)`;
    }
}

const cicles = [];

document.getElementById("btnAfegirCicle").addEventListener("click", () => {
    const nomCicle = prompt("Introdueix el nom del cicle:");
    const cicle = new Cicle(nomCicle);
    cicles.push(cicle);
    console.log(`Cicle afegit: ${cicle.toString()}`);
});

document.getElementById("btnAfegirModul").addEventListener("click", () => {
    const numCicle = parseInt(prompt("Introdueix el número del cicle:"));
    const cicle = cicles[numCicle];
    if (cicle) {
        const numModul = parseInt(prompt("Introdueix el número del mòdul:"));
        const nomModul = prompt("Introdueix el nom del mòdul:");
        const horesModul = parseInt(prompt("Introdueix les hores del mòdul:"));
        const modul = new Modul(numModul, nomModul, horesModul);
        cicle.addModul(modul);
        console.log(`Mòdul afegit: ${modul.toString()}`);
    } else {
        alert("Cicle no trobat!");
    }
});

document.getElementById("btnEliminarCicle").addEventListener("click", () => {
    const numCicle = parseInt(prompt("Introdueix el número del cicle:"));
    if (cicles[numCicle]) {
        cicles.splice(numCicle, 1);
        console.log(`Cicle eliminat.`);
    } else {
        alert("Cicle no trobat!");
    }
});

document.getElementById("btnEditarCicle").addEventListener("click", () => {
    const numCicle = parseInt(prompt("Introdueix el número del cicle:"));
    const cicle = cicles[numCicle];
    if (cicle) {
        cicle.setNumEdicions();
        console.log(`Nombre d'edicions: ${cicle.numEdicions}, Última data d'edició: ${cicle.lastEditDate}`);
    } else {
        alert("Cicle no trobat!");
    }
});

document.getElementById("btnCalcularHores").addEventListener("click", () => {
    const numCicle = parseInt(prompt("Introdueix el número del cicle:"));
    const cicle = cicles[numCicle];
    if (cicle) {
        alert(`Total d'hores del cicle: ${cicle.calcularHores()}`);
    } else {
        alert("Cicle no trobat!");
    }
});
