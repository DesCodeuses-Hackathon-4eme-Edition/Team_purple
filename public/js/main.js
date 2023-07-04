// const escapeXSS = (text) => {
//     if (typeof text !== 'string') return text;
//     const map = {
//         '&': '&amp;',
//         '<': '&lt;',
//         '>': '&gt;',
//         '"': '&quot;',
//         "'": '&#039;',
//     };
//     return text.replace(/[&<>"']/g, m => map[m]);
// };

// const questionnaireBody = document.querySelector('.questionnaire-body');

// const filters = {{ filters|json_encode()|raw }};
// const associations = {{ associations|json_encode()|raw }};

// console.log('tous les filtres', filters);
// console.log('toutes les assos', associations);

// const regions = filters.filter(filter => filter.type === 'region');
// const modeDeTravail = filters.filter(filter => filter.type === 'mode-de-travail');
// const disponibilites = filters.filter(filter => filter.type === 'disponibilite');
// const missions = filters.filter(filter => filter.type === 'mission');

// let etape = 0;
// const filtersSelected = {
//     region: null,
//     modeDeTravail: null,
//     disponibilite: null,
//     mission: null,
// };

// const questions = [
//     {
//         title: 'J\'habite dans la région :',
//         type: 'region',
//         filters: regions,
//     },
//     {
//         title: 'Je préfère effectuer ma mission :',
//         type: 'modeDeTravail',
//         filters: modeDeTravail,
//     },
//     {
//         title: 'Je suis disponible :',
//         type: 'disponibilite',
//         filters: disponibilites,
//     },
//     {
//         title: 'Ma mission de mentorat, je l\'imagine :',
//         type: 'mission',
//         filters: missions,
//     },
// ];

// const displayQuestion = () => {
//     const question = questions[etape];
//     const filters = question ? question.filters : [];
//     const filtersHTML = filters
//         .map(filter => `<button type="button" class="btn btn-outline-dark btn-lg" data-id="${filter.id}">${escapeXSS(filter.text)}</button>`)
//         .join('');

//     const assos = getFilteredAssociations();
//     const nbAssos = assos.length;

//     questionnaireBody.innerHTML = `
//     <h3 class="text-center mb-4">
//         ${escapeXSS(question ? question.title : '')}
//     </h3>
//     <div class="d-grid gap-2 mb-4">
//         ${nbAssos > 0 ? filtersHTML : `<p class="text-center text-danger">Aucune association ne correspond à vos critères.</p>`}
//         ${etape > 0 ? '<button type="button" class="btn btn-outline-danger btn-lg">Retour</button>' : ''}
//     </div>
//     <ul>
//         ${assos.map(asso => '<li>' + escapeXSS(asso.name) + '</li>').join('')}
//     </ul>
//     `;

//     console.log('etape', etape);
//     console.log('filtersSelected', filtersSelected);
//     console.log('nbAssos', nbAssos);
//     console.log('assos', assos);

//     const btns = questionnaireBody.querySelectorAll('button');
//     btns.forEach((btn, index) => {
//         btn.addEventListener('click', () => {
//             if (btn.textContent === 'Retour') {
//                 filtersSelected[questions[etape - 1].type] = null;
//                 etape--;
//             } else {
//                 const id = parseInt(btn.getAttribute('data-id'));
//                 filtersSelected[question.type] = id;
//                 etape++;
//             }

//             if (etape > 3) {
//                 displayResult();
//             } else {
//                 displayQuestion();
//             }
//         });
//     });
// };

// const getFilteredAssociations = () => {
//     return associations.filter(asso => {
//         if (
//             filtersSelected.region !== null
//             && !asso.filters.includes(filtersSelected.region)
//         ) {
//             return false;
//         }
//         if (
//             filtersSelected.modeDeTravail !== null
//             && !asso.filters.includes(filtersSelected.modeDeTravail)
//         ) {
//             return false;
//         }
//         if (
//             filtersSelected.disponibilite !== null
//             && !asso.filters.includes(filtersSelected.disponibilite)
//         ) {
//             return false;
//         }
//         if (
//             filtersSelected.mission !== null
//             && !asso.filters.includes(filtersSelected.mission)
//         ) {
//             return false;
//         }
//         return true;
//     });
// };

// const displayResult = () => {
//     const assos = getFilteredAssociations();

//     questionnaireBody.innerHTML = `
//     <h3 class="text-center mb-4">
//         Résultat
//     </h3>
//     <div class="d-grid gap-2">
//         ${assos.map(asso => `
//             <div class="card">
//                 <div class="card-body">
//                     ${escapeXSS(asso.name)}
//                 </div>
//             </div>
//         `).join('')}
//         ${assos.length === 0 ? '<p class="text-center text-danger">Aucune association ne correspond à vos critères.</p>' : ''}
//         <button type="button" class="btn btn-outline-danger btn-lg">Retour</button>
//     </div>
//     `;

//     questionnaireBody.querySelector('button').addEventListener('click', () => {
//         etape--;
//         filtersSelected[questions[etape].type] = null;
//         displayQuestion();
//     });
// };

// displayQuestion();

