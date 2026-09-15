/* =========================
   MENU
========================= */

const menuBtn =
    document.getElementById("menuBtn");

const menu =
    document.getElementById("menu");


menuBtn.addEventListener("click", function () {

    menu.classList.toggle("show");

});


/* =========================
   SEARCH
========================= */

const searchBtn =
    document.getElementById("searchBtn");

const searchBox =
    document.getElementById("searchBox");

const closeSearch =
    document.getElementById("closeSearch");

const searchInput =
    document.getElementById("searchInput");

const searchResult =
    document.getElementById("searchResult");


searchBtn.addEventListener("click", function () {

    searchBox.classList.add("show");

    menu.classList.remove("show");

    searchInput.focus();

});


closeSearch.addEventListener("click", function () {

    searchBox.classList.remove("show");

    searchInput.value = "";

    searchResult.innerHTML = "";

});


/* =========================
   COURSE SEARCH
========================= */

const courses = [

    "Web Development",

    "Computer Fundamentals",

    "Mathematics",

    "Indian History"

];


searchInput.addEventListener(
    "input",
    function () {

        const value =
            searchInput.value
            .toLowerCase()
            .trim();


        if (value === "") {

            searchResult.innerHTML = "";

            return;

        }


        const results =
            courses.filter(function (course) {

                return course
                    .toLowerCase()
                    .includes(value);

            });


        if (results.length > 0) {

            searchResult.innerHTML =
                "<strong>Courses Found:</strong> "
                + results.join(" • ");

        } else {

            searchResult.innerHTML =
                "No course found.";

        }

    }
);


/* =========================
   CLOSE MENU
========================= */

document.addEventListener(
    "click",
    function (event) {

        if (
            !menu.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {

            menu.classList.remove("show");

        }

    }
);


/* =========================
   QUIZ
========================= */

const quizBtn =
    document.getElementById("quizBtn");


quizBtn.addEventListener(
    "click",
    function () {

        alert(
            "Quiz section ready!\n\n" +
            "Next step: Add questions, options and score system."
        );

    }
);
