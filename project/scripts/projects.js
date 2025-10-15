document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        {
            projectName: "Me Home Page",
            imageUrl: "images/webpage-images/about-me-project.png",
            width: "893px",
            height: "784px",
            htmlLogo: "images/logos/html-logo.png",
            altHtml: "HTML5 Logo",
            cssLogo: "images/logos/css-logo.png",
            altCss: "CSS Logo",
            jsLogo: "images/logos/javascript-logo.png",
            altJs: "JavaScript Logo",
            projectDescription: "This homepage project showcases my foundational web development skills by combining HTML and CSS for structure and design. It also integrates dynamic features using JavaScript, reflecting key concepts from recent learning activities. The result is a responsive, interactive personal site that highlights both technical proficiency and creative presentation."
        },
        {
            projectName: "Temple Page",
            imageUrl: "images/webpage-images/temple-project.png",
            width: "893px",
            height: "784px",
            htmlLogo: "images/logos/html-logo.png",
            altHtml: "HTML5 Logo",
            cssLogo: "images/logos/css-logo.png",
            altCss: "CSS Logo",
            jsLogo: "images/logos/javascript-logo.png",
            altJs: "JavaScript Logo",
            projectDescription: "This web page features LDS temples worldwide in a responsive grid layout. Users can view temple details and filter by age or size. Built with HTML, CSS, and JavaScript, it includes lazy loading for faster performance and a clean, user-friendly design across devices."
        },
        {
            projectName: "Country Page",
            imageUrl: "images/webpage-images/place-project.png",
            width: "765px",
            height: "601px",
            htmlLogo: "images/logos/html-logo.png",
            altHtml: "HTML5",
            cssLogo: "images/logos/css-logo.png",
            altCss: "CSS Logo",
            jsLogo: "images/logos/javascript-logo.png",
            altJs: "JavaScript Logo",
            projectDescription: "This web page project showcases South Africa, my home country, through a dynamic layout built with HTML, CSS, and JavaScript. It features key facts like area, population, capital, languages, currency, and time zone, along with interactive elements such as real-time weather and highlights of Cape Town’s Table Mountain. The project reflects my ability to blend technical skills with cultural storytelling for an engaging user experience."
        },
        {
            projectName: "Form Page",
            imageUrl: "images/webpage-images/product-review-form-project.png",
            width: "893px",
            height: "784px",
            htmlLogo: "images/logos/html-logo.png",
            altHtml: "HTML5 Logo",
            cssLogo: "images/logos/css-logo.png",
            altCss: "CSS Logo",
            jsLogo: "images/logos/javascript-logo.png",
            altJs: "JavaScript Logo",
            projectDescription: "This responsive web page form allows users to select a product, rate it, choose an installation date, and highlight useful features. Optional fields for written feedback and name are included, along with a submission confirmation and counter. Built with HTML, CSS, and JavaScript, the layout is optimized for both desktop and mobile use.."
        }
    ];

    const container = document.querySelector('.container-project-box');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const projectTitle = document.createElement('h2');
        projectTitle.textContent = project.projectName;
        projectCard.appendChild(projectTitle);

        const projectImage = document.createElement('img');
        projectImage.src = project.imageUrl;
        projectImage.width = project.width;
        projectImage.height = project.height;
        projectImage.alt = `${project.projectName} Image`;
        projectCard.appendChild(projectImage);

        const projectInfo = document.createElement('div');
        projectInfo.className = 'project-info';

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.projectDescription;
        projectInfo.appendChild(projectDescription);

        const logosDiv = document.createElement('div');
        logosDiv.className = 'logos';

        const htmlLogo = document.createElement('img');
        htmlLogo.src = project.htmlLogo;
        htmlLogo.alt = project.altHtml;
        logosDiv.appendChild(htmlLogo);

        const cssLogo = document.createElement('img');
        cssLogo.src = project.cssLogo;
        cssLogo.alt = project.altCss;
        logosDiv.appendChild(cssLogo);

        const jsLogo = document.createElement('img');
        jsLogo.src = project.jsLogo;
        jsLogo.alt = project.altJs;
        logosDiv.appendChild(jsLogo);

        projectInfo.appendChild(logosDiv);
        projectCard.appendChild(projectInfo);
        container.appendChild(projectCard);
    });
});