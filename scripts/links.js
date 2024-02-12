const baseURL = "https://EthanBrayZA.github.io/wdd230/";
const linksURL = "https://EthanBrayZA.github.io/wdd230/data/links.json";

const activityList = document.getElementById("activity-list");

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        // console.log(data);
        displayLinks(data.weeks);
    } catch (error) {
        console.error("Error fetching links data:", error);
    }
}

function displayLinks(weeks) {


    weeks.forEach((week) => {
        const weekElement = document.createElement("li");
        weekElement.textContent = week.week;

        const linksList = document.createElement("ul");

        // Loop through each link in the week
        week.links.forEach((link) => {
            const li = document.createElement("li");
            const a = document.createElement("a");

            a.href = baseURL + link.url;
            a.textContent = link.title;

            li.appendChild(a);
            linksList.appendChild(li);
        });

        weekElement.appendChild(linksList);
        activityList.appendChild(weekElement);

    });
};

getLinks();