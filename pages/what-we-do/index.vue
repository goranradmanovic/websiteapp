<template>
   <main class="wrapper">
      <!--=============== WHAT WE DO HERO ===============-->
      <section class="hero wwd">
          <div class="hero__container">
            <div class="hero__text">
               <h1>
                  <span class="hero__text--teal">What we do</span>
               </h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin libero nunc consequat interdum varius sit amet mattis.</p>
            </div>
         </div>
      </section>
      <!--=============== WHAT WE DO FILTERS SECTION ===============-->
      <section class="wwd__filters">
         <div class="wwd__filters__wrapper">
            <div class="wwd__filters__row mobile">
               <p>Filter by:</p>

               <div class="filters__container">
                  <div class="btn btn-rounded btn-outline filter__item active" id="sector-btn">
                     Selector
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="m10 10.976 4.124-4.125 1.179 1.179L10 13.333 4.696 8.03 5.875 6.85 10 10.976Z"/></svg>
                  </div>
                  <div class="btn btn-rounded btn-outline filter__item active" id="tech-btn">
                     Technology
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="m10 10.976 4.124-4.125 1.179 1.179L10 13.333 4.696 8.03 5.875 6.85 10 10.976Z"/></svg>
                  </div>
               </div>
            </div>
            <!-- First filer row (Filter by sector) -->
            <div class="wwd__filters__row" id="sector-c">
               <p>Filter by sector:</p>

               <div class="filters__container">
                  <div v-for="(item, index) in sectorFilterBtns" :key="index" class="btn btn-rounded btn-outline filter__item" :class="{ 'active': item.active }" @click="toggleActive(sectorFilterBtns, index, item.name, item.type)">
                     {{ item.name }}
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="xmark"><path fill-opacity=".4" d="m10 8.822 4.125-4.125 1.179 1.179L11.179 10l4.125 4.124-1.179 1.179-4.124-4.125-4.125 4.125-1.179-1.179 4.125-4.124-4.125-4.125 1.179-1.179L10 8.822Z"/></svg>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="checkmark"><path d="m8.334 12.642 7.66-7.66 1.179 1.179-8.839 8.838-5.303-5.303 1.178-1.178 4.125 4.124Z"/></svg>
                  </div>
               </div>
            </div>
            <!-- Second filer row (Filter by technology) -->
            <div class="wwd__filters__row" id="tech-c">
               <p>Filter by technology:</p>

               <div class="filters__container">
                  <div v-for="(item, index) in techFilterBtns" :key="index" class="btn btn-rounded btn-outline filter__item" :class="{ 'active': item.active }" @click="toggleActive(techFilterBtns, index, item.name, item.type)">
                     {{ item.name }}
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="xmark"><path fill-opacity=".4" d="m10 8.822 4.125-4.125 1.179 1.179L11.179 10l4.125 4.124-1.179 1.179-4.124-4.125-4.125 4.125-1.179-1.179 4.125-4.124-4.125-4.125 1.179-1.179L10 8.822Z"/></svg>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="checkmark"><path d="m8.334 12.642 7.66-7.66 1.179 1.179-8.839 8.838-5.303-5.303 1.178-1.178 4.125 4.124Z"/></svg>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section class="wwd__projects">
         <template v-if="projectKeyYears.length">
            <div v-for="(projectYear, index) in projectKeyYears" :key="index" class="wwd__projects__row">
               <div class="wwd__projects__date-counter">
                  <h2>{{ projectYear }}</h2>
                  <h3>{{ projectsData[projectYear].length }} projects</h3>
               </div>
               <div class="wwd__projects__cards">
                  <template v-for="(item, index) in projectsData[projectYear]" :key="`${item.id} - ${index}`">
                     <NuxtLink to="/portfolio" class="wwd__projects__card card card-rl-radius-s" :class="{ 'hidden': index > 4, 'show': showMore }">
                        <div class="wwd__projects__card__icons">
                           <img :src="`/_nuxt/assets/images/what-we-do/${item.icon}.svg`" :alt="item.icon" />
                           <img src="~assets/images/what-we-do/arrow-top.svg" alt="Arrow top left" class="arrow-top-left" />
                        </div>
                        <h3>{{ item.product }}</h3>
                        <p>{{ item.url }}</p>
                     </NuxtLink>
                  </template>

                  <div v-if="projectsData[projectYear].length > 5" class="wwd__projects__card card card-rl-radius-s more-card" id="card-more-btn" @click="toggleShowMore">
                     <div class="wwd__projects__card__icons">
                        <img src="~assets/images/what-we-do/more.svg" alt="More icon" class="more-icon" />
                        <img src="~assets/images/what-we-do/arrow-top.svg" alt="Arrow top left" class="arrow-top-left" />
                     </div>
                     <h3>
                        <img v-if="!showMore" src="~assets/images/what-we-do/plus.svg" alt="Plus sign" />
                        <span>{{ !showMore ? `${projectsData[projectYear].length - 5 } More` : 'Show Less' }}</span>
                     </h3>
                  </div>
               </div>
            </div>
         </template>
         <template v-else>
            <div class="wwd__projects__row">
               <div class="wwd__projects__date-counter">
                  <h3>0 projects selected</h3>
               </div>
               <div class="wwd__projects__cards">
                  <div class="wwd__projects__card card card-rl-radius-s no-data">
                     <h3>No filtered data</h3>
                  </div>
               </div>
            </div>
         </template>

         <!-- CTA -->
         <div class="wwd__projects__row projects__cta">
            <NuxtLink to="./contact-us" class="btn btn-rounded btn-bg-green btn-lr-radius-m cta">
               <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none"><path fill="#fff" d="m26.953 18.333-8.94-8.94 2.357-2.357L33.333 20 20.37 32.963l-2.357-2.357 8.94-8.94H6.667v-3.333h20.286Z"/></svg>
               Get in touch to see how we can help
            </NuxtLink>
         </div>
      </section>
   </main>
</template>

<script setup>
   import { sectors, technologies, projects } from '~/data/what-we-do/data.json';

   useGetMeta();

   let projectsData = reactive([]),
      projectKeyYears = reactive([]),
      selectedSectors = [],
      selectedTech = [],
      displayOnSiteProjects = [];

   const showMore = ref(false),
      sectorFilterBtns = ref(sectors),
      techFilterBtns = ref(technologies);
   
   // Toggle 'More' button
   const toggleShowMore = () => showMore.value = !showMore.value,
      getProjectsKeys = projects => Object.keys(projects).sort().reverse(),
      getDisplayOnSiteProjects = projects => projects.filter(item => item.displayOnSite); // Filter data by 'displayOnSite' property

   // Group by key ect. 'year'
   const groupBy = (input, key) => {
      return input.reduce((acc, currentValue) => {
         let groupKey = currentValue[key];
         if (!acc[groupKey]) acc[groupKey] = [];
         
         acc[groupKey].push(currentValue);
         return acc;
      }, {});
   };

   displayOnSiteProjects = getDisplayOnSiteProjects(projects);
   projectsData = groupBy(displayOnSiteProjects, 'year');
   projectKeyYears = getProjectsKeys(projectsData);

   // Toggle filter and filter data
   const toggleActive = (btns, index, term, filterType) => {

      btns[index].active = !btns[index].active;

      // Selected filters
      slectedFilters(btns[index].active, term, filterType);

      // Filtered projects
      let filteredProjects = filterProjects(projects, selectedSectors, selectedTech);

      // Formated projects for show
      projectsData = groupBy(filteredProjects, 'year');
      projectKeyYears = getProjectsKeys(projectsData);
   }

   // Function for set selected buttons - filters
   const slectedFilters = (activeBtn, term, type) => {
      // Toggle items in tech or sector array
      switch(true) {
         case activeBtn && type === 'sector':
            selectedSectors.push(term)
         break;
         case !activeBtn && type === 'sector':
            selectedSectors = selectedSectors.filter(item => item !== term);
         break;
         case activeBtn && type === 'tech':
            selectedTech.push(term)
         break;
         case !activeBtn && type === 'tech':
            selectedTech = selectedTech.filter(item => item !== term);
         break;
         default:
            return;
      }
   }

   // Function for filter projects by sectors and technologies
   const filterProjects = (projects, selectedSectors, selectedTechnologies) => {
      // If both arrays are empty, return original data
      if (!selectedSectors.length && !selectedTechnologies.length) return getDisplayOnSiteProjects(projects);

      // Filter based on sectors if selectedSectors is not empty
      if (selectedSectors.length > 0) {
         projects = projects.filter(project => selectedSectors.every(sector => project.sectors.includes(sector)));
      }

      // Filter based on technologies if selectedTechnologies is not empty
      if (selectedTechnologies.length > 0) {
         projects = projects.filter(project => selectedTechnologies.every(tech => project.technologies.includes(tech)));
      }

      return getDisplayOnSiteProjects(projects);
   }
</script>