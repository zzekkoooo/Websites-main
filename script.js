
const categoryLabels = {
    "ugaona-garnitura": "Ugaona Garnitura",
    trosed: "Trosed",
    "francuski-lezaj": "Francuski Ležaj",
    samac: "Samac",
    kanabe: "Kanabe",
    fotelje: "Fotelje",
    taburea: "Taburea"
};

const collections = [
    {
        id: "taburea",
        category: "taburea",
        description: "Kompaktan dizajn, upečatljiv oblik i mekana tekstura.",
        image: "images/taburea-angle.jpg",
        photos: [
            { src: "images/taburea-angle.jpg", alt: "Taburea, pogled iz ugla", caption: "Pogled iz ugla" },
            { src: "images/taburea-front.jpg", alt: "Taburea, pogled spreda", caption: "Pogled spreda" }
        ]
    },
    {
        id: "taburea-light",
        category: "taburea",
        description: "Svetla, neutralna nijansa sa mekom teksturom.",
        image: "images/taburea-light-angle.jpg",
        photos: [
            { src: "images/taburea-light-angle.jpg", alt: "Svetli tabure, pogled iz ugla", caption: "Pogled iz ugla" },
            { src: "images/taburea-light-front.jpg", alt: "Svetli tabure, pogled spreda", caption: "Pogled spreda" }
        ]
    },
    {
        id: "armchair",
        category: "fotelje",
        description: "Zaobljena fotelja sa mekim, segmentiranim naslonom.",
        image: "images/armchair-angle.jpg",
        photos: [
            { src: "images/armchair-angle.jpg", alt: "Fotelja, pogled spreda", caption: "Pogled spreda" },
            { src: "images/armchair-side.jpg", alt: "Fotelja, pogled iz drugog ugla", caption: "Pogled iz drugog ugla" }
        ]
    },
    {
        id: "armchair-teal",
        category: "fotelje",
        description: "Mekana fotelja zaobljenih linija u dubokoj teal nijansi.",
        image: "images/armchair-teal-front.jpg",
        photos: [
            { src: "images/armchair-teal-front.jpg", alt: "Teal fotelja, pogled spreda", caption: "Pogled spreda" },
            { src: "images/armchair-teal-side.jpg", alt: "Teal fotelja, pogled sa strane", caption: "Pogled sa strane" }
        ]
    },
    {
        id: "sofa-set",
        category: "ugaona-garnitura",
        description: "Prostrana garnitura u neutralnim tonovima sa usklađenim detaljima.",
        image: "images/sofa-set.jpg",
        photos: [
            { src: "images/sofa-set.jpg", alt: "Garnitura u svetlim tonovima sa stočićem i tabureima", caption: "Garnitura" }
        ]
    },
    {
        id: "ugaona-garnitura-slika",
        category: "ugaona-garnitura",
        description: "",
        imageLabel: "Slika 1 · Slika 2",
        captionOnly: true,
        image: "images/ugaona-garnitura-slika-1.jpg",
        photos: [
            { src: "images/ugaona-garnitura-slika-1.jpg", alt: "Ugaona garnitura, slika 1", caption: "Slika 1" },
            { src: "images/ugaona-garnitura-slika-2.jpg", alt: "Ugaona garnitura, slika 2", caption: "Slika 2" }
        ]
    },
    {
        id: "francuski-lezaj-zaobljeno-uzglavlje",
        category: "francuski-lezaj",
        description: "Tapacirani krevet sa jednostavnim, zaobljenim uzglavljem.",
        image: "images/francuski-lezaj-zaobljeno-uzglavlje.jpg",
        photos: [
            { src: "images/francuski-lezaj-zaobljeno-uzglavlje.jpg", alt: "Krevet sa zaobljenim uzglavljem, pogled iz ugla", caption: "Pogled iz ugla" }
        ]
    },
    {
        id: "francuski-lezaj-bubble",
        category: "francuski-lezaj",
        description: "Mekano tapacirani krevet sa zaobljenim, segmentiranim detaljima.",
        image: "images/francuski-lezaj-bubble-ugao.png",
        photos: [
            { src: "images/francuski-lezaj-bubble-ugao.png", alt: "Krevet Bubble, pogled iz ugla", caption: "Pogled iz ugla" },
            { src: "images/francuski-lezaj-bubble-spreda.jpg", alt: "Krevet Bubble, pogled spreda", caption: "Pogled spreda" }
        ]
    },
    {
        id: "francuski-lezaj-geometrijsko-uzglavlje",
        category: "francuski-lezaj",
        description: "Svetao tapacirani krevet sa uzglavljem geometrijskih linija.",
        image: "images/francuski-lezaj-geometrijsko-uzglavlje.jpg",
        photos: [
            { src: "images/francuski-lezaj-geometrijsko-uzglavlje.jpg", alt: "Krevet sa geometrijskim uzglavljem, pogled iz ugla", caption: "Pogled iz ugla" }
        ]
    },
    {
        id: "samac-slika-1",
        category: "samac",
        description: "",
        image: "images/samac-slika-1.jpg",
        photos: [
            { src: "images/samac-slika-1.jpg", alt: "Ležaj za jednu osobu, slika 1", caption: "Pogled iz ugla" }
        ]
    },
    {
        id: "samac-slika-2",
        category: "samac",
        description: "",
        image: "images/samac-slika-2.jpg",
        photos: [
            { src: "images/samac-slika-2.jpg", alt: "Ležaj za jednu osobu, slika 2", caption: "Pogled iz ugla" }
        ]
    }
];

let galleryIndex = 0;
let galleryTrigger = null;
let activeGalleryId = "taburea";

function hasWhitePhotoBackground(model) {
    return model.category === "taburea" ||
        model.category === "fotelje" ||
        model.id === "sofa-set";
}

function renderProducts() {
    const grid = document.getElementById("productsGrid");
    const category = document.getElementById("categoryFilter").value;
    const filtered = collections.filter(model =>
        category === "all" || model.category === category
    );

    grid.innerHTML = filtered.length ? filtered.map(model => {
        const content = `
            <div class="product-image-wrap${hasWhitePhotoBackground(model) ? " product-image-wrap--white" : ""}">
                <img src="${model.image}" alt="${model.photos[0].alt}" loading="lazy">
                <span class="model-view-indicator">${model.imageLabel || (model.photos.length > 1 ? "Pogledajte iz svih uglova" : "Uvećajte fotografiju")} <span aria-hidden="true">↗</span></span>
            </div>
            ${model.description ? `
                <div class="product-info">
                    <p class="product-description">${model.description}</p>
                </div>
            ` : ""}
        `;

        return `
            <article class="product-card model-card">
                <button class="model-card-button" type="button" onclick="openModelGallery('${model.id}', event)" aria-label="${model.photos.length > 1 ? "Pogledajte fotografije" : "Uvećajte fotografiju"}, ${categoryLabels[model.category].toLowerCase()}">${content}</button>
            </article>
        `;
    }).join("") : '<p class="empty-results">U ovoj kategoriji trenutno nema modela.</p>';
}

function updateGallery() {
    const gallery = collections.find(model => model.id === activeGalleryId);
    const photo = gallery.photos[galleryIndex];
    document.querySelector(".gallery-image-frame").classList.toggle(
        "gallery-image-frame--white",
        hasWhitePhotoBackground(gallery)
    );

    document.getElementById("galleryTitle").textContent = categoryLabels[gallery.category];
    document.getElementById("galleryImage").src = photo.src;
    document.getElementById("galleryImage").alt = photo.alt;
    document.getElementById("galleryCaption").textContent =
        gallery.captionOnly ? photo.caption : `${photo.caption} · ${galleryIndex + 1} / ${gallery.photos.length}`;
    document.querySelector(".gallery-previous").hidden = gallery.photos.length < 2;
    document.querySelector(".gallery-next").hidden = gallery.photos.length < 2;
}

function openModelGallery(modelId, event) {
    galleryTrigger = event.currentTarget;
    activeGalleryId = modelId;
    galleryIndex = 0;
    updateGallery();

    const overlay = document.getElementById("galleryOverlay");
    overlay.classList.add("active");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    overlay.querySelector(".gallery-close").focus();
}

function closeTabureaGallery() {
    const overlay = document.getElementById("galleryOverlay");
    overlay.classList.remove("active");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (galleryTrigger) {
        galleryTrigger.focus();
        galleryTrigger = null;
    }
}

function closeGalleryOutside(event) {
    if (event.target.id === "galleryOverlay") {
        closeTabureaGallery();
    }
}

function changeGalleryImage(direction) {
    const gallery = collections.find(model => model.id === activeGalleryId);
    galleryIndex = (galleryIndex + direction + gallery.photos.length) % gallery.photos.length;
    updateGallery();
}

function toggleMenu() {
    const nav = document.getElementById("navLinks");
    const toggle = document.querySelector(".menu-toggle");
    const isOpen = nav.classList.toggle("active");
    toggle.setAttribute("aria-expanded", isOpen);
    toggle.setAttribute("aria-label", isOpen ? "Zatvori navigaciju" : "Otvori navigaciju");
}

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks").classList.remove("active");
        document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
        document.querySelector(".menu-toggle").setAttribute("aria-label", "Otvori navigaciju");
    });
});

document.addEventListener("keydown", event => {
    const galleryOverlay = document.getElementById("galleryOverlay");
    if (galleryOverlay.classList.contains("active")) {
        if (event.key === "Escape") {
            closeTabureaGallery();
        } else if (event.key === "ArrowLeft" && collections.find(model => model.id === activeGalleryId).photos.length > 1) {
            changeGalleryImage(-1);
        } else if (event.key === "ArrowRight" && collections.find(model => model.id === activeGalleryId).photos.length > 1) {
            changeGalleryImage(1);
        }
        return;
    }

    if (event.key === "Escape") {
        document.getElementById("navLinks").classList.remove("active");
        document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
        document.querySelector(".menu-toggle").setAttribute("aria-label", "Otvori navigaciju");
    }
});

renderProducts();
document.getElementById("currentYear").textContent = new Date().getFullYear();
