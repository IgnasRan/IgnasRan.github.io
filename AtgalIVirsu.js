const AtgalIVirsu = document.getElementById("AtgalIVirsu");

        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                AtgalIVirsu.style.display = "block";
            } else {
                AtgalIVirsu.style.display = "none";
            }
        });

        AtgalIVirsu.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });