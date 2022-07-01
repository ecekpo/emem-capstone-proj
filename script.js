const speakers = [
  {
    id: '0',
    image: './images/Okuwa.jpg',
    name: 'Okuwa Nwanze',
    job: 'Senior Business Insight Analyst at TD',
    description:
      'Over 12 years of experience in delivering data driven analytics and Information Technology solutions to businesses and corporations',
  },
  {
    id: '1',
    image: './images/Olanrewaju.jpg',
    name: 'Dr. Olanrewaju Olawepo',
    job: 'Senior Systems Analyst at National Open University of Nigeria (NOUN)',
    description:
      'Implement, maintain and oversee enforcement of policies and associated plans for system security administration, and user system access based on industry-standard best practices Head IT Resource',
  },
  {
    id: '2',
    image: './images/Richard.jpeg',
    name: 'Richard Amafonye',
    job: 'Head IT Resource, Access Corporation',
    description:
      'Dr. Richard has a successful track record in leading positions in Technology in the Financial Service Sector.',
  },
  {
    id: '3',
    image: './images/Reza.jpg',
    name: 'Reza Tamanani',
    job: 'Senior Business Insight Analyst at TD Wealth| Python | SQL | Pyspark | ML | PowerBI | Tableau',
    description: 'Result oriented professional with in-depth knowledge of database types; big data manipulation using Pyspark, SQL and Python; big data visualization using Tableau and Power BI. ',
  },
  {
    id: '4',
    image: './images/Adesina.jpg',
    name: ' Prof. Simon Adesina Soidya',
    job: 'Senior Lecturer',
    description:
      'He is a lecturer at the Department of Computer Science, Federal University of Agriculture, Abeokuta, (FUNAAB), Ogun State (Nigeria). He was elected Prsident of Nigeria Computer Society (NCS) in July 2019',
  },
  {
    id: '5',
    image: './images/IsaAli.jpg',
    name: 'Prof. Isa Ali',
    job: 'Honorable Commissioner',
    description:
      'Prof. Isa Ali is the Honourable Minister of Communications and Digital Economy of the Federal Republic of Nigeria. He is specializing in Computer Information Systems',
  },
];
const createSpeaker = () => {
  const addSpeaker = document.querySelector('#speakers');
  speakers.forEach((speaker) => {
    addSpeaker.insertAdjacentHTML(
      'beforeend',
      `
        <li id="0" class="item">
            <div class="speaker-img-div"><img class="speaker-img" src="${speaker.image}" alt=""></div>
            <div class="speaker-details">
              <p class="name">${speaker.name}</p>
              <p class="work">${speaker.job}</p>
              <div class="div-item"></div>
              <p class="work-description">${speaker.description}</p>
            </div>
          </li>
      `,
    );
  });
};

document.addEventListener('DOMContentLoaded', () => {
  createSpeaker();
});

// Mobile menu
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-button');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

document.querySelectorAll('.navigate').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  mobileMenu.classList.remove('active');
}));

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  hamburger.classList.remove('active');
});