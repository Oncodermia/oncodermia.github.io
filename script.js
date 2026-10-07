const boutonMenu = document.getElementById("menu-mobile");
const navigation = document.getElementById("navigation-principale");

if (boutonMenu && navigation) {

    boutonMenu.addEventListener("click", function () {

        navigation.classList.toggle("menu-ouvert");

        const menuEstOuvert =
            navigation.classList.contains("menu-ouvert");

        boutonMenu.setAttribute(
            "aria-expanded",
            menuEstOuvert
        );

    });

}