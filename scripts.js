console.log("Ahoy, matey! Welcome to MECHAVERSE Hack Club. May your code be bug-free and your adventures grand!");

function scrollToSection(id) {
    let section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        console.error("Section not found:", id);
    }
}