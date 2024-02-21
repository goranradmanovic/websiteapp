<template>
    <main class="wrapper">
        <!--=============== HOME HERO ===============-->
        <section class="hero hh">
            <div class="hero__container">
                <div class="hero__text">
                    <h1>
                        <span class="hero__text--gold">ROI-Driven</span> <span class="hero__text--teal">Software Solutions</span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <NuxtLink to="/contact-us" class="btn btn-rounded btn-bg-green hero__text__cta">Get in Touch</NuxtLink>
                </div>
            </div>
        </section>
        <!--=============== TESTIMONIALS ===============-->
        <Testimonial :testimonial="useGetTestimonial(1)" />

        <!--=============== PROCESSES ===============-->
        <section class="processes">
            <div class="processes__container">
                <div class="title">
                    <p>Here’s how we</p>
                    <h2>Make your project an <span>Investment</span>,<br /> not an expense</h2>
                </div>
                <div class="item">
                    <div class="item__text it__left-p">
                        <p class="item__text__small">First,</p>
                        <h2>We <span>refine</span> your <br /> project</h2>
                        <div class="item__text__info">
                            <p>Over the last 20 years, we've delivered hundreds of successful projects (including our own SaaS businesses).</p>
                            <p>This experience enables us to mitigate the risks others overlook, spot the opportunities they miss, and get the most mileage out of your budget.</p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item__text it__right-p">
                        <p class="item__text__small">Then,</p>
                        <h2>We <span>build</span> and <br> <span>launch</span> it</h2>
                        <div class="item__text__info">
                            <p>You'll have a dedicated team of senior developers working on your project so it's in safe hands -from concept to completion.</p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item__text it__left-p">
                        <p class="item__text__small">After launch,</p>
                        <h2>You get <span>ongoing</span> <br /> support</h2>
                        <div class="item__text__info">
                            <p>We don't launch and leave.</p>
                            <p>We'll continue to work with you to maintain, optimise, and update your software so it performs as it should, always.</p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item__text it__right-p">
                        <p class="item__text__small">All the while,</p>
                        <h2>You’re kept <span>in <br /> the loop</span></h2>
                        <div class="item__text__info">
                            <p>Our strict "No Surprises" policy means you'll never have to chase us up.</p>
                            <p>You get a dedicated IntelliQ contact, frequent updates, and open channels of communication.</p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <NuxtLink to="/contact-us" class="btn btn-rounded btn-bg-green btn-lr-radius-m cta">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
                            <path fill="#fff" d="m26.953 18.333-8.94-8.94 2.357-2.357L33.333 20 20.37 32.963l-2.357-2.357 8.94-8.94H6.667v-3.333h20.286Z"/>
                        </svg>
                        Get in touch to see how we can help
                    </NuxtLink>
                </div>
            </div>
        </section>
        <!--=============== TESTIMONIALS ===============-->
        <Testimonial :testimonial="useGetTestimonial(2)" />

        <!--=============== DELIVERABLES OLD SECTION ===============-->
        <!--<section class="deliverables p-relative">
            <div class="deliverables__container">
                <div class="title">
                    <p>Recent work</p>
                    <h2>Clear solutions <br /> to complex problems</h2>
                </div>
                <div class="item">
                    <div class="item__text">
                        <h3 class="item__text__tag">Etap</h3>
                        <h2>Complete migration <br /> <span>Zero disruption</span></h2>
                        <p>ETAP's e-commerce platform was approaching end-of-life. So, we designed, developed & implemented new capabilities before seamlessly transitioning the business to their new, future-proof platform.</p>
                        <a href="./pages/case-studies-blog.html?blog=etap" target="_blank" class="btn btn-rounded btn-bg-green item__text__cta">Read full case study</a>
                    </div>
                    <img src="~assets/images/deliverables/etap-s.webp" alt="Etap image" class="item__img" />
                </div>
                <div class="item">
                    <img src="~assets/images/deliverables/safelives-s.webp" alt="Etap image" class="item__img" />
                    <div class="item__text">
                        <h3 class="item__text__tag">SafeLives</h3>
                        <h2>New Platform <br /> <span>Greater Impact</span></h2>
                        <p>After winning the tender, we rebuilt the reporting system that sustains the organisation's crucial work. The modernised platform eliminated dozens of manual processes, simplified the user experience, and enabled them to help more people in need, more effectively.</p>
                        <a href="./pages/case-studies-blog.html?blog=safelives" target="_blank" class="btn btn-rounded btn-bg-green item__text__cta">Read full case study</a>
                    </div>
                </div>
                <div class="item">
                    <div class="item__text">
                        <h3 class="item__text__tag">RedSpeed</h3>
                        <h2>A Smart DevOps process <br /> <span>A streamlined team</span></h2>
                        <p>Conducting a detailed technical audit enabled us to pinpoint the inefficiencies of Redspeed's existing processes. With those insights, we designed and implemented a tailored DevOps process. This boosted the engineering team's speed & output, enabled visibility into their workflows, and increased leadership's confidence in the team's efforts.</p>
                        <a href="./pages/case-studies-blog.html?blog=redspeed" target="_blank" class="btn btn-rounded btn-bg-green item__text__cta">Read full case study</a>
                    </div>
                    <img src="~assets/images/deliverables/redspeed-s.webp" alt="Etap image" class="item__img" />
                </div>
                <div class="item">
                    <a href="./pages/contact-us.html" target="_blank" class="btn btn-rounded btn-bg-green btn-lr-radius-m cta p-absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none"><path fill="#fff" d="m26.953 18.333-8.94-8.94 2.357-2.357L33.333 20 20.37 32.963l-2.357-2.357 8.94-8.94H6.667v-3.333h20.286Z"/></svg>
                        Get in touch to see how we can help
                    </a>
                </div>
            </div>
            </section>-->
        <!--=============== DELIVERABLES NEW REDESIGN SECTION ===============-->
        <section class="deliverables p-relative">
            <div class="deliverables__container">
                <div class="title">
                    <p>Recent work</p>
                    <h2>Clear solutions <br /> to complex problems</h2>
                </div>
                <div class="deliverables__container__items">
                    <div class="item">
                        <img src="~assets/images/deliverables/e-commerce.svg" alt="E-commerce Icon" class="item__img" />
                        <div class="item__text">
                            <h3 class="item__text__tag">Purchify</h3>
                            <h2>Complete <br /> migration <br /> <span class="item__text--teal">Zero disruption</span></h2>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <NuxtLink to="#" target="_blank" class="btn btn-rounded btn-bg-green item__text__cta">Read full case study</NuxtLink>
                        </div>
                    </div>
                    <div class="item">
                        <img src="~assets/images/deliverables/team.svg" alt="Team Icon" class="item__img" />
                        <div class="item__text">
                            <h3 class="item__text__tag">Saleify</h3>
                            <h2>New Platform <br /> <span class="item__text--teal">Greater Impact</span></h2>
                            <p>Porttitor leo a diam sollicitudin. Risus quis varius quam quisque id diam vel quam elementum. Eget egestas purus viverra accumsan in nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna ac placerat vestibulum lectus mauris ultrices eros in. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus.</p>
                            <NuxtLink to="/case-studies/safelives" class="btn btn-rounded btn-bg-green item__text__cta">Read full case study</NuxtLink>
                        </div>
                    </div>
                    <div class="item">
                        <img src="~assets/images/deliverables/audit.svg" alt="Audit Icon" class="item__img" />
                        <div class="item__text">
                            <h3 class="item__text__tag">Ecomart</h3>
                            <h2>Complete <br /> migration <br /> <span class="item__text--teal">Zero disruption</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ultrices sagittis orci a scelerisque purus semper eget. Neque viverra justo nec ultrices dui.Risus quis varius quam quisque id diam vel quam elementum. Eget egestas purus viverra accumsan in nisl.</p>
                            <NuxtLink to="#" class="btn btn-rounded btn-bg-green item__text__cta">Read full case study</NuxtLink>
                        </div>
                    </div>
                </div>
                <NuxtLink to="/contact-us" class="btn btn-rounded btn-bg-green btn-lr-radius-m cta">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
                        <path fill="#fff" d="m26.953 18.333-8.94-8.94 2.357-2.357L33.333 20 20.37 32.963l-2.357-2.357 8.94-8.94H6.667v-3.333h20.286Z"/>
                    </svg>
                    Get in touch to see how we can help
                </NuxtLink>
            </div>
        </section>
        <!--=============== PROCESS ===============-->
        <section class="process">
            <div class="process__container">
                <div class="title">
                    <p>Capabilities</p>
                    <h2>Expert support for <span>every</span> stage of <br /> your project</h2>
                </div>
                <!-- PROCESS FIRST SECTION/ITEM -->
                <div class="item first-section">
                    <div class="item__title">
                        <h3 class="item__title__tag">How we help</h3>
                        <h2 class="item__title__text">Before your <br /> project <br /> starts</h2>
                    </div>
                    <div class="item__content">
                        <h2 class="item__content first">
                            <div class="item__content__icon">
                                <img src="~assets/images/icons/process/magnifier.svg" alt="Magnifier image" />
                            </div>
                            Discover & Validate
                        </h2>
                        <p>We get specific on what you're looking to achieve, make sure your solution is possible, and confirm it will have the impact you want it to.</p>
                    </div>
                    <div class="item__content">
                        <h2>
                            <div class="item__content__icon">
                                <img src="~assets/images/icons/process/pen-ruler.svg" alt="Pen ruler image" />
                            </div>
                            System Design
                        </h2>
                        <p>We define the requirements, refine the solution, and design the system that will help you hit your big picture goals.</p>
                    </div>
                    <div class="item__content">
                        <h2>
                            <div class="item__content__icon">
                                <img src="~assets/images/icons/process/project-planing.svg" alt="Project planing image" />
                            </div>
                            Project Planning
                        </h2>
                        <p>We thoroughly outline the timeline to follow, the milestones to hit, and the resources to engage.</p>
                    </div>
                    <div class="item__content last">
                        <h2 class="item__content__title">
                            <div class="item__content__icon s-icon">
                                <img src="~assets/images/icons/process/arrow-right.svg" alt="Arrow right image" />
                            </div>
                            What you get
                        </h2>
                        <div class="item__content__card">
                            <p>A designed & priced solution, a strategic path forward, and a partner to see it through.</p>
                            <img src="~assets/images/icons/process/check-mark.svg" alt="Check mark image" />
                        </div>
                    </div>
                </div>
                <!-- PORCESS SECOND SECTION/ITEM -->
                <div class="item">
                    <div class="item__title">
                        <h3 class="item__title__tag">How we help</h3>
                        <h2 class="item__title__text">During your <br /> project</h2>
                    </div>
                    <div class="item__content">
                        <h2 class="item__content first">
                            <div class="item__content__icon">
                                <img src="~assets/images/icons/process/plus.svg" alt="Plus image" />
                            </div>
                            Infrastructure Implementation
                        </h2>
                        <p>We establish robust, scalable tech foundations to supprt your operations and future-proof your systems.</p>
                    </div>
                    <div class="item__content">
                        <h2>
                            <div class="item__content__icon">
                                <img src="~assets/images/icons/process/plus.svg" alt="Plus image" />
                            </div>
                            Transparent Project Management
                        </h2>
                        <p>We invite you into key project meetings, and keep everything on track, on time and on budget.</p>
                    </div>
                    <div class="item__content">
                        <h2>
                            <div class="item__content__icon">
                                <img src="~assets/images/icons/process/sync-cog.svg" alt="Cog image" />
                            </div>
                            Transparent Project Management
                        </h2>
                        <p>We invite you into key project meetings, and keep everything on track, on time and on budget.</p>
                    </div>
                    <div class="item__content">
                        <h2>
                            <div class="item__content__icon">
                                <img src="~assets/images/icons/process/pen-ruler.svg" alt="Pen ruler image" />
                            </div>
                            UX/UI Design
                        </h2>
                        <p>Before we write a single line of code, we map the user experience and craft intuitive interfaces.</p>
                    </div>
                    <div class="item__content">
                        <h2>
                            <div class="item__content__icon">
                                <img src="~assets/images/icons/process/microscope.svg" alt="Pen ruler image" />
                            </div>
                            QA & User Testing
                        </h2>
                        <p>Rigorouse testing to ensure flawless functionality and happy users.</p>
                    </div>
                    <div class="item__content">
                        <h2>
                            <div class="item__content__icon">
                                <img src="~assets/images/icons/process/plus.svg" alt="Plus image" />
                            </div>
                            Oversight & Governance
                        </h2>
                        <p>We provide vigilant project supervision to ensure compliance, quality, and alignment with your strategic business objectives.</p>
                    </div>
                    <div class="item__content last">
                        <h2 class="item__content__title">
                            <div class="item__content__icon s-icon">
                                <img src="~assets/images/icons/process/arrow-right.svg" alt="Arrow right image" />
                            </div>
                            What you get
                        </h2>
                        <div class="item__content__card">
                            <p>Your vision made real & reliable - built, implemented, launched.</p>
                            <img src="~assets/images/icons/process/check-mark.svg" alt="Check mark image" />
                        </div>
                    </div>
                </div>
                <!-- PROCESS THIRD SECTION/ITEM -->
                <div class="item">
                    <div class="item__title">
                        <h3 class="item__title__tag">How we help</h3>
                        <h2 class="item__title__text">After <br /> Launch</h2>
                    </div>
                    <div class="item__content">
                        <h2 class="item__content first">
                            <div class="item__content__icon">
                                <img src="~assets/images/icons/process/cloud.svg" alt="Cloud image" />
                            </div>
                            Cloud Infrastructure Management
                        </h2>
                        <p>Efficiently managing and optimising cloud resources to enhance perofrmance, security, and cost-effectiveness.</p>
                    </div>
                    <div class="item__content">
                        <h2>
                            <div class="item__content__icon">
                                <img src="~assets/images/icons/process/tools.svg" alt="Tools image" />
                            </div>
                            Ongoing Support & Maintenance
                        </h2>
                        <p>We provide continuous, reliable assistance and updates to ensure your systems run smoothly and efficiently.</p>
                    </div>
                    <div class="item__content">
                        <h2>
                            <div class="item__content__icon">
                                <img src="~assets/images/icons/process/monitor.svg" alt="Monitor image" />
                            </div>
                            Proactive Monitoring & Issue Resolution
                        </h2>
                        <p>We track system performance to quickly address and resolve issues, ensuring uninterupted operations.</p>
                    </div>
                    <div class="item__content last">
                        <h2 class="item__content__title">
                            <div class="item__content__icon s-icon">
                                <img src="~assets/images/icons/process/arrow-right.svg" alt="Arrow right image" />
                            </div>
                            What you get
                        </h2>
                        <div class="item__content__card">
                            <p>A solution that continues to run at peak performance.</p>
                            <img src="~assets/images/icons/process/check-mark.svg" alt="Check mark image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--=============== PROCESS SECOND (WHITE SECTION) ===============-->
        <section class="process second__section">
            <div class="process__container">
                <div class="item">
                    <div class="item__title">
                        <h3 class="item__title__tag">How we help</h3>
                        <h2 class="item__title__text">Throughout <br /> your <br /> project</h2>
                    </div>
                    <div class="item__content first">
                        <h2>
                            <div class="item__content__icon">
                                <img src="~assets/images/icons/process/code-audits.svg" alt="Code Auditis" />
                            </div>
                            Code Audits
                        </h2>
                        <p>We conduct thorough reviews to ensure code quality, scalability, and security - enhancing overall software health and longevity.</p>
                    </div>
                    <div class="item__content">
                        <h2>
                            <div class="item__content__icon">
                                <img src="~assets/images/icons/process/cto.svg" alt="CTO image" />
                            </div>
                            Fractional CTO
                        </h2>
                        <p>We provide strategic tech leadership to steer your projects, align technology with business goals, and drive innovation efficiently.</p>
                    </div>
                    <div class="item__content">
                        <h2>
                            <div class="item__content__icon">
                                <img src="~assets/images/icons/process/devs.svg" alt="Devs image" />
                            </div>
                            Bolster Your Dev Capacity
                        </h2>
                        <p>We enahnce your team's firepower with our expert developers working seamlessly with your team.</p>
                    </div>
                    <div class="item__content last">
                        <h2 class="item__content__title">
                            <div class="item__content__icon s-icon">
                                <img src="~assets/images/icons/process/arrow-right.svg" alt="Arrow right image" />
                            </div>
                            What you get
                        </h2>
                        <div class="item__content__card">
                            <p>On-demand insight, guidance, and capacity.</p>
                            <img src="~assets/images/icons/process/check-mark.svg" alt="Check mark image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--=============== TESTIMONIALS ===============-->
        <Testimonial :testimonial="useGetTestimonial(3)" />

        <!--=============== HERO BOTTOM ===============-->
        <section class="hero__bottom">
            <div class="hero__container">
                <img src="~assets/images/hero-bottom/hb-logo.svg" alt="Hero bottom logo image" class="hero__bottom__logo" />
                <div class="hero__bottom__text">
                    <h2>
                        <span>Make your project pay for itself</span>
                        <span>IntelliQ Difference</span>
                    </h2>
                    <NuxtLink to="/contact-us" class="btn btn-rounded btn-bg-green hero__bottom__text__cta">Get in Touch</NuxtLink>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
    useGetMeta();
</script>