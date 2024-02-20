<template>
    <nav class="nav">
        <NuxtLink to="/" class="nav__logo">
            <img src="~assets/images/logo/tsd-logo-light.svg" alt="Logo image" />
        </NuxtLink>
        <div class="nav__toggle" id="nav-open" @click="toggleMenu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z" />
            </svg>
        </div>
        <!--=============== NAV MENU ===============-->
        <ul class="nav__list" id="nav-menu" :class="{ 'open': menu }">
            <li class="nav__list__close" id="nav-close" @click="toggleMenu">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                        <path fill="#FFF" d="m12 10.586 4.95-4.95 1.415 1.415-4.95 4.95 4.95 4.95-1.415 1.414-4.95-4.95-4.95 4.95-1.413-1.415 4.95-4.95-4.95-4.95L7.05 5.638l4.95 4.95Z" />
                    </svg>
                </div>
            </li>
            <li>
                <NuxtLink to="/" class="nav__link">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/what-we-do" class="nav__link">What we do</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/who-we-are" class="nav__link">Who we are</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/e-commerce" class="nav__link">E-Commerce</NuxtLink>
            </li>
            <li class="dropdown__item">
                <div class="nav__link" id="dropdown-link" @click="toggleDropdown">
                    Case studies
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="caret-down">
                        <path d="m12 13.171 4.95-4.95 1.414 1.415L12 16 5.636 9.636 7.05 8.222l4.95 4.95Z" />
                    </svg>
                </div>
            </li>
            <li>
                <!--<NuxtLink to="/blog" class="nav__link">Blog</NuxtLink>-->
                <NuxtLink to="https://tsd.digital/blog/" class="nav__link" target="_blank">Blog</NuxtLink>
            </li>
            <li class="nav__list__phone">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.421 11.421 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.421 11.421 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884Zm-2.522-.657 1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.45 12.45 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.441 12.441 0 0 1-.75-1.588Z" />
                </svg>
                <a href="tel: +0121 31 45 374" class="nav__link">0121 31 45 374</a>
            </li>
        </ul>
        <!--=============== MAIN DROPDOWN MENU ===============-->
        <DropdownMenu ref="dropdownMenuEl" :isOpen="dropdown" @close="toggleDropdown" />
    </nav>
</template>

<script setup>
    const menu = ref(false),
        dropdown = ref(false),
        dropdownMenuEl = ref();

    const toggleMenu = () => menu.value = !menu.value,
        toggleDropdown = () => dropdown.value = !dropdown.value;

    // VueUse func. for closing dropdown when you click outside of dropdown menu
    onClickOutside(dropdownMenuEl, event => event.target.id !== 'dropdown-link' ? dropdown.value = false : false)
</script>
