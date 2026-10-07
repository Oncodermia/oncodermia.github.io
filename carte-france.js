// ==================================================
// CARTE INTERACTIVE DE FRANCE - ONCODERMIA
// ==================================================

const zoneCarte = document.getElementById("carte-france");

const departementNom = document.getElementById(
    "departement-nom"
);

const departementDescription = document.getElementById(
    "departement-description"
);

const departementRessources = document.getElementById(
    "departement-ressources"
);
// ==================================================
// LIENS DES COMITÉS DÉPARTEMENTAUX
// LIGUE CONTRE LE CANCER
// ==================================================

const liensLigueParDepartement = {

    "01": "https://www.ligue-cancer.net/01-ain",
    "02": "https://www.ligue-cancer.net/02-aisne",
    "03": "https://www.ligue-cancer.net/03-allier",
    "04": "https://www.ligue-cancer.net/04-alpes-de-hauteprovence",
    "05": "https://www.ligue-cancer.net/05-hautesalpes",
    "06": "https://www.ligue-cancer.net/06-alpesmaritimes",
    "07": "https://www.ligue-cancer.net/07-ardeche",
    "08": "https://www.ligue-cancer.net/08-ardennes",
    "09": "https://www.ligue-cancer.net/09-ariege",
    "10": "https://www.ligue-cancer.net/10-aube",

    "11": "https://www.ligue-cancer.net/11-aude",
    "12": "https://www.ligue-cancer.net/12-aveyron",
    "13": "https://www.ligue-cancer.net/13-bouchesdurhone",
    "14": "https://www.ligue-cancer.net/14-calvados",
    "15": "https://www.ligue-cancer.net/15-cantal",
    "16": "https://www.ligue-cancer.net/16-charente",
    "17": "https://www.ligue-cancer.net/17-charentemaritime",
    "18": "https://www.ligue-cancer.net/18-cher",
    "19": "https://www.ligue-cancer.net/19-correze",

    "2A": "https://www.ligue-cancer.net/20a-corse-du-sud",
    "2B": "https://www.ligue-cancer.net/20b-hautecorse",

    "21": "https://www.ligue-cancer.net/21-cotedor",
    "22": "https://www.ligue-cancer.net/22-cotes-darmor",
    "23": "https://www.ligue-cancer.net/23-creuse",
    "24": "https://www.ligue-cancer.net/24-dordogne",

    "26": "https://www.ligue-cancer.net/26-drome",
    "27": "https://www.ligue-cancer.net/27-eure",
    "28": "https://www.ligue-cancer.net/28-eureetloir",
    "29": "https://www.ligue-cancer.net/29-finistere",
    "30": "https://www.ligue-cancer.net/30-gard",

    "31": "https://www.ligue-cancer.net/31-hautegaronne",
    "32": "https://www.ligue-cancer.net/32-gers",
    "33": "https://www.ligue-cancer.net/33-gironde",
    "34": "https://www.ligue-cancer.net/34-herault",
    "35": "https://www.ligue-cancer.net/35-illeetvilaine",
    "36": "https://www.ligue-cancer.net/36-indre",
    "37": "https://www.ligue-cancer.net/37-indreetloire",
    "38": "https://www.ligue-cancer.net/38-isere",
    "39": "https://www.ligue-cancer.net/39-jura",
    "40": "https://www.ligue-cancer.net/40-landes",

    "41": "https://www.ligue-cancer.net/41-loiretcher",
    "42": "https://www.ligue-cancer.net/42-loire",
    "43": "https://www.ligue-cancer.net/43-hauteloire",
    "44": "https://www.ligue-cancer.net/44-loireatlantique",
    "45": "https://www.ligue-cancer.net/45-loiret",
    "46": "https://www.ligue-cancer.net/46-lot",
    "47": "https://www.ligue-cancer.net/47-lotetgaronne",
    "48": "https://www.ligue-cancer.net/48-lozere",
    "49": "https://www.ligue-cancer.net/49-maineetloire",
    "50": "https://www.ligue-cancer.net/50-manche",

    "51": "https://www.ligue-cancer.net/51-marne",
    "52": "https://www.ligue-cancer.net/52-hautemarne",
    "53": "https://www.ligue-cancer.net/53-mayenne",
    "54": "https://www.ligue-cancer.net/54-meurtheetmoselle",
    "55": "https://www.ligue-cancer.net/55-meuse",
    "56": "https://www.ligue-cancer.net/56-morbihan",
    "57": "https://www.ligue-cancer.net/57-moselle",
    "58": "https://www.ligue-cancer.net/58-nievre",
    "59": "https://www.ligue-cancer.net/59-nord",
    "60": "https://www.ligue-cancer.net/60-oise",

    "61": "https://www.ligue-cancer.net/61-orne",
    "62": "https://www.ligue-cancer.net/62-pasdecalais",
    "63": "https://www.ligue-cancer.net/63-puydedome",
    "64": "https://www.ligue-cancer.net/64-pyreneesatlantiques",
    "65": "https://www.ligue-cancer.net/65-hautespyrenees",
    "66": "https://www.ligue-cancer.net/66-pyreneesorientales",
    "67": "https://www.ligue-cancer.net/67-basrhin",
    "68": "https://www.ligue-cancer.net/68-hautrhin",
    "69": "https://www.ligue-cancer.net/69-rhone",
    "70": "https://www.ligue-cancer.net/70-hautesaone",

    "71": "https://www.ligue-cancer.net/71-saoneetloire",
    "72": "https://www.ligue-cancer.net/72-sarthe",
    "73": "https://www.ligue-cancer.net/73-savoie",
    "74": "https://www.ligue-cancer.net/74-hautesavoie",
    "75": "https://www.ligue-cancer.net/75-paris",
    "76": "https://www.ligue-cancer.net/76-seinemaritime",
    "77": "https://www.ligue-cancer.net/77-seineetmarne",
    "78": "https://www.ligue-cancer.net/78-yvelines",
    "79": "https://www.ligue-cancer.net/79-deuxsevres",
    "80": "https://www.ligue-cancer.net/80-somme",

    "81": "https://www.ligue-cancer.net/81-tarn",
    "82": "https://www.ligue-cancer.net/82-tarnetgaronne",
    "83": "https://www.ligue-cancer.net/83-var",
    "84": "https://www.ligue-cancer.net/84-vaucluse",
    "85": "https://www.ligue-cancer.net/85-vendee",
    "86": "https://www.ligue-cancer.net/86-vienne",
    "87": "https://www.ligue-cancer.net/87-hautevienne",
    "88": "https://www.ligue-cancer.net/88-vosges",
    "89": "https://www.ligue-cancer.net/89-yonne",
    "90": "https://www.ligue-cancer.net/90-territoire-de-belfort",

    "91": "https://www.ligue-cancer.net/91-essonne",
    "92": "https://www.ligue-cancer.net/92-hautsdeseine",
    "93": "https://www.ligue-cancer.net/93-seinesaintdenis",
    "94": "https://www.ligue-cancer.net/94-valdemarne",
    "95": "https://www.ligue-cancer.net/95-valdoise",

    "971": "https://www.ligue-cancer.net/971-guadeloupe",
    "972": "https://www.ligue-cancer.net/972-martinique",
    "973": "https://www.ligue-cancer.net/973-guyane",
    "974": "https://www.ligue-cancer.net/974-la-reunion"

};
function creerLienLigue(code, nom) {

    // Cas particulier : le Doubs possède deux comités

    if (code === "25") {

        return `
            <a
                href="https://www.ligue-cancer.net/25b-doubs-besancon"
                target="_blank"
                rel="noopener noreferrer"
            >
                Comité de Besançon →
            </a>

            <br><br>

            <a
                href="https://www.ligue-cancer.net/25m-doubs-montbeliard"
                target="_blank"
                rel="noopener noreferrer"
            >
                Comité de Montbéliard →
            </a>
        `;
    }


    // Lien départemental normal

    if (liensLigueParDepartement[code]) {

        return `
            <a
                href="${liensLigueParDepartement[code]}"
                target="_blank"
                rel="noopener noreferrer"
            >
                Voir le comité de ${nom} →
            </a>
        `;
    }


    // Si aucun comité départemental direct n'existe

    return `
        <a
            href="https://www.ligue-cancer.net/la-ligue-pres-de-chez-vous-comite"
            target="_blank"
            rel="noopener noreferrer"
        >
            Trouver la Ligue près de chez vous →
        </a>
    `;
}

// ==================================================
// CHARGEMENT DE LA CARTE
// ==================================================

if (zoneCarte) {

    fetch("data/departements-1000m.geojson")

        .then(response => {

            if (!response.ok) {
                throw new Error(
                    "Impossible de charger la carte."
                );
            }

            return response.json();

        })

        .then(data => {
            afficherCarte(data);
        })

        .catch(error => {

            console.error(error);

            zoneCarte.innerHTML = `
                <p class="erreur-carte">
                    La carte n'a pas pu être chargée.
                </p>
            `;

        });
}


// ==================================================
// AFFICHAGE DE LA CARTE
// ==================================================

function afficherCarte(data) {

    const largeur = 700;
    const hauteur = 650;

    const svg = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
    );

    svg.setAttribute(
        "viewBox",
        `0 0 ${largeur} ${hauteur}`
    );

    svg.setAttribute(
        "aria-label",
        "Carte des départements français"
    );

    svg.classList.add("svg-france");

    zoneCarte.appendChild(svg);


    // On conserve uniquement la France métropolitaine
    const departementsMetropole =
        data.features.filter(feature => {

            const geometrie = feature.geometry;

            if (!geometrie) {
                return false;
            }

            const coordonnees =
                geometrie.type === "Polygon"
                    ? geometrie.coordinates.flat(1)
                    : geometrie.coordinates.flat(2);

            return coordonnees.some(point => {

                const longitude = point[0];
                const latitude = point[1];

                return (
                    longitude >= -6 &&
                    longitude <= 10 &&
                    latitude >= 41 &&
                    latitude <= 52
                );

            });

        });


    const minLongitude = -5.5;
    const maxLongitude = 9.8;

    const minLatitude = 41;
    const maxLatitude = 51.5;


    function projeter(longitude, latitude) {

        const x =
            ((longitude - minLongitude) /
                (maxLongitude - minLongitude))
            * largeur;

        const y =
            hauteur -
            ((latitude - minLatitude) /
                (maxLatitude - minLatitude))
            * hauteur;

        return [x, y];

    }


    departementsMetropole.forEach(feature => {

        const code =
            feature.properties.code ||
            feature.properties.CODE_DEPT ||
            "";

        const nom =
            feature.properties.nom ||
            feature.properties.NOM ||
            "Département";


        const path = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
        );

        let dessin = "";


        if (feature.geometry.type === "Polygon") {

            dessin = creerChemin(
                feature.geometry.coordinates,
                projeter
            );

        }


        if (feature.geometry.type === "MultiPolygon") {

            feature.geometry.coordinates.forEach(
                polygone => {

                    dessin += creerChemin(
                        polygone,
                        projeter
                    );

                }
            );

        }


        path.setAttribute("d", dessin);

        path.setAttribute(
            "data-code",
            code
        );

        path.setAttribute(
            "data-nom",
            nom
        );

        path.setAttribute(
            "tabindex",
            "0"
        );

        path.setAttribute(
            "role",
            "button"
        );

        path.setAttribute(
            "aria-label",
            `${code} - ${nom}`
        );

        path.classList.add("departement");


        // Clic sur un département
        path.addEventListener(
            "click",
            function () {

                selectionnerDepartement(
                    path,
                    code,
                    nom
                );

            }
        );


        // Utilisation au clavier
        path.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    selectionnerDepartement(
                        path,
                        code,
                        nom
                    );

                }

            }
        );


        // Nom affiché au survol
        const titre = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "title"
        );

        titre.textContent =
            `${code} - ${nom}`;

        path.appendChild(titre);

        svg.appendChild(path);

    });

}


// ==================================================
// CRÉATION DES FORMES DES DÉPARTEMENTS
// ==================================================

function creerChemin(
    polygone,
    projeter
) {

    let chemin = "";

    polygone.forEach(anneau => {

        anneau.forEach(
            (point, index) => {

                const [x, y] =
                    projeter(
                        point[0],
                        point[1]
                    );

                if (index === 0) {

                    chemin +=
                        `M ${x} ${y}`;

                } else {

                    chemin +=
                        ` L ${x} ${y}`;

                }

            }
        );

        chemin += " Z ";

    });

    return chemin;

}


// ==================================================
// SÉLECTION D'UN DÉPARTEMENT
// ==================================================

function selectionnerDepartement(
    element,
    code,
    nom
) {    
    document
        .querySelectorAll(".bouton-outremer")
        .forEach(bouton => {
            bouton.classList.remove(
                "bouton-outremer-actif"
            );
        });

    // Retire l'ancienne sélection
    document
        .querySelectorAll(".departement")
        .forEach(departement => {

            departement.classList.remove(
                "departement-actif"
            );

        });


    // Sélectionne le département cliqué
    element.classList.add(
        "departement-actif"
    );


    // Affiche le numéro et le nom du département
    departementNom.textContent =
        `${code} – ${nom}`;


    departementDescription.textContent =
        `Voici les principales ressources pour vous orienter dans le département ${nom}.`;


    // ==================================================
    // RESSOURCES GÉNÉRALES
    // ==================================================

    let contenuRessources = `

        <div class="bloc-ressource-carte">

            <span class="icone-ressource-carte">
                🎗️
            </span>

            <div>

                <h4>
                    Ligue contre le cancer
                </h4>

                <p>
                    Retrouvez le comité départemental,
                    ses espaces d'accueil et les soins
                    de support proposés près de chez vous.
                </p>

                ${creerLienLigue(code, nom)}

            </div>

        </div>

    `;


    // ==================================================
    // ASSOCIATIONS LOCALES
    // ==================================================

    const associationsLocales =
        typeof associationsParDepartement !== "undefined"
        && associationsParDepartement[code]
            ? associationsParDepartement[code]
            : [];


    if (associationsLocales.length > 0) {

        contenuRessources += `

            <div class="titre-associations-locales">

                <span>📍</span>

                <div>
                    <h4>
                        Associations locales
                    </h4>

                    <p>
                        Ressources référencées par
                        Oncodermia dans ce département.
                    </p>
                </div>

            </div>

        `;


        associationsLocales.forEach(
            association => {

                const services =
                    association.services
                        .map(service => {
                            return `
                                <span class="tag-ressource-locale">
                                    ${service}
                                </span>
                            `;
                        })
                        .join("");


                contenuRessources += `

                    <div class="association-locale-carte">

                        <span class="type-association-locale">
                            ${association.type}
                        </span>

                        <h5>
                            ${association.nom}
                        </h5>

                        <p>
                            ${association.description}
                        </p>

                        <div class="services-association-locale">
                            ${services}
                        </div>

                        <a
                            href="${association.lien}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            En savoir plus →
                        </a>

                    </div>

                `;

            }
        );

    } else {

        contenuRessources += `

            <div class="aucune-association-locale">

                <span>
                    📍
                </span>

                <div>

                    <h4>
                        Associations locales
                    </h4>

                    <p>
                        Aucune association locale
                        n'est encore référencée par
                        Oncodermia dans ce département.
                    </p>

                    <small>
                        Notre annuaire est enrichi
                        progressivement.
                    </small>

                </div>

            </div>

        `;

    }


    // Affichage final
    departementRessources.innerHTML =
        contenuRessources;

}
// ==================================================
// DÉPARTEMENTS D'OUTRE-MER
// ==================================================

document
    .querySelectorAll(".bouton-outremer")
    .forEach(bouton => {

        bouton.addEventListener(
            "click",
            function () {

                const code =
                    bouton.dataset.code;

                const nom =
                    bouton.dataset.nom;

                const elementTemporaire =
                    document.createElement("div");

                selectionnerDepartement(
                    elementTemporaire,
                    code,
                    nom
                );

                document
                    .querySelectorAll(".bouton-outremer")
                    .forEach(autreBouton => {
                        autreBouton.classList.remove(
                            "bouton-outremer-actif"
                        );
                    });

                bouton.classList.add(
                    "bouton-outremer-actif"
                );

            }
        );

    });
