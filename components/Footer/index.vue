<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__info">
                <img src="~/assets/images/logo/tsd-logo-light.svg" alt="Logo image" />

                <div class="footer__info__box">
                    <p>Court Farmhouse, Hole-in-the-Wall, Herefordshire, HR9 7JN</p>
                    <div class="footer__info__box__contact">
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                            <path fill="#32AA86" d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.421 11.421 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.421 11.421 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884Zm-2.522-.657 1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.45 12.45 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.441 12.441 0 0 1-.75-1.588Z"/>
                        </svg>
                        <a href="tel:+0121 31 45 374" class="">0121 31 45 374</a>
                        </span>
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="#32AA86" d="M2.5 2.5h15c.46 0 .833.373.833.833v13.334c0 .46-.373.833-.833.833h-15a.833.833 0 0 1-.833-.833V3.333c0-.46.373-.833.833-.833Zm14.167 3.532-6.607 5.916-6.727-5.935v9.82h13.334V6.032ZM3.76 4.167l6.292 5.551 6.199-5.551H3.76Z"/></svg>
                        <a href="mailto:clinic@tsd.digital" class="">clinic@tsd.digital</a>
                        </span>
                    </div>
                    <div class="footer__info__box__reg">
                        <span>&copy; TSD 2023</span>
                        <span>Co. Reg: 6502026</span>
                    </div>
                    <div>Vat: 889598522 GB</div>
                </div>
            </div>
            <div class="footer__menu">
                <h3>Menu</h3>
                <nav>
                    <ul>
                        <li><NuxtLink to="/what-we-do">What we do</NuxtLink></li>
                        <li><NuxtLink to="/who-we-are">Who we are</NuxtLink></li>
                        <li><NuxtLink to="/e-commerce">E-Commerce</NuxtLink></li>
                        <li><NuxtLink to="/case-studies">Case studies</NuxtLink></li>
                        <li><NuxtLink to="/contact-us">Contact us</NuxtLink></li>
                        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
                    </ul>
                </nav>
            </div>
            <div class="footer__article">
                <h3>Latest Article</h3>
                <h2>Choosing the best e-Commerce platform</h2>
                <NuxtLink to="/e-commerce" class="btn btn-rounded btn-clr-white btn-outline footer__article__cta">
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="m5.38 15-3.713 2.917V2.5c0-.46.373-.833.833-.833h15c.46 0 .834.373.834.833v11.667c0 .46-.373.833-.834.833H5.38Zm-.577-1.667h11.864v-10H3.334v11.155l1.469-1.155ZM9.167 7.5h1.667v1.667H9.167V7.5Zm-3.333 0H7.5v1.667H5.834V7.5Zm6.666 0h1.667v1.667H12.5V7.5Z"/></svg>
                </NuxtLink>
            </div>
            <div class="footer__products">
                <h3>Other Products</h3>

                <div>
                    <img src="~/assets/images/footer-logo/igloo-logo-light.svg" alt="Igloo logo" />
                    <img src="~/assets/images/footer-logo/trendseam-logo-light.svg" alt="TrendSeam logo" />
                </div>
            </div>
            </div>

            <div class="footer__strip">
            <img src="~/assets/images/icons/utils/brand_strip.svg" alt="Footer strip image" />
        </div>
    </footer>
</template>