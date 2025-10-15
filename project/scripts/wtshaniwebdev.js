document.addEventListener('DOMContentLoaded', () => {
    const aboutMyself = document.querySelector('.about-myself');
    if (aboutMyself) {
        const aboutMyselfContent = `
            <h2>Work Experiences</h2>
            <p>My professional journey reflects a blend of technical expertise, creative problem-solving, and values-driven collaboration.
            </p>
            <p>In web development, I’ve contributed to projects involving front-end design, responsive layout implementation, and backend logic—each tailored to meet specific user needs and business goals.
            </p>
            <p>As a website localizer, I’ve adapted digital content to resonate with diverse audiences, ensuring linguistic accuracy, cultural relevance, and seamless user experience across regions. In my role as a social media page moderator, I’ve cultivated respectful online communities by managing content, responding to user engagement, and upholding brand tone and integrity.
            </p>
            <p>Whether working independently or within a team, I apply principles of trust, teamwork, and customer-centric performance to deliver reliable, scalable solutions that connect meaningfully with users.
            </p>

        `;
        aboutMyself.innerHTML = aboutMyselfContent;
    }

    const education = document.querySelector('.education');
    if (education) {
        const eduactionContent = `
            <h2>Education</h2>
            <p>My educational journey reflects a commitment to both technical excellence and values-driven growth.
            </p>
            <p>I am currently pursuing web development and programming studies through BYU–Idaho, where I’m building proficiency in front-end and back-end technologies, responsive design, and creative problem-solving.
            </p>
            <p>I also hold a degree in Agriculture from the University of South Africa (UNISA), which has shaped my understanding of sustainability, systems thinking, and purposeful stewardship.
            </p>
            <p>Together, these experiences reflect a multidisciplinary foundation that informs not only how I build digital solutions, but why I build them—with clarity, empathy, and impact.
            </p>
        `;
        education.innerHTML = eduactionContent;
    }
});