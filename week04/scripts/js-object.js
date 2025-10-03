// Add sections property with two section objects
let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        {
            sectionNumber: "001",
            enrolled: 95,
            instructor: "Robert Diaz Rodriguez"
        },
        {
            sectionNumber: "002",
            enrolled: 80,
            instructor: "Sarah Gobble"
        }
    ]
};

// Set course information to existing HTML element with and id of courseName
function setCourseInformation(course) {
    document.querySelector("#courseName").innerHTML = `${course.code} - ${course.title}`;
}

/* Create rows in an existing HTML table with an id of sections for each existing section
This code separates the rendering using a map function from the template that builds a row. */
function sectionTemplate(section) {
    return `<tr>
                <td>${section.sectionNumber}</td>
                <td>${section.enrolled}</td>
                <td>${section.instructor}</td>
            <tr>`;
}

function renderSections(sections) {
  const html = sections.map(sectionTemplate);
  document.querySelector("#sections tbody").innerHTML = html.join("");
}

setCourseInformation(aCourse);
renderSections(aCourse.sections);