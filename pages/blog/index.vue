<template>
	<main class="wrapper">
		<!--=============== BLOG - HERO BLOG SECTION - (b) ===============-->
		<section class="hero b">
			<div class="hero__container">
				<div class="hero__text">
					<h1>
						<span class="hero__text--teal">Blog</span>
					</h1>
				</div>
				<form action="" method="post" autocomplete="off" target="_self" class="hero__form" id="search-form">
					<div class="hero__form__group">
						<input type="text" id="b-search" name="b-search" class="hero__form__group__input" placeholder="Search" />
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
							<path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617Zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7 3.133 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15Z"/>
						</svg>
					</div>
					<div class="hero__form__group">
						<button class="btn btn-rounded btn-bg-green">
							Archive
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
								<path fill="#fff" d="M2.5 8.333h-.834V3.336c0-.462.38-.836.827-.836h15.013c.457 0 .827.365.827.836v4.997h-.834v8.335a.83.83 0 0 1-.827.832H3.327a.83.83 0 0 1-.828-.832V8.333Zm13.333 0H4.166v7.5h11.667v-7.5Zm-12.5-4.166v2.5h13.333v-2.5H3.333ZM7.499 10h5v1.667h-5V10Z"/>
							</svg>
						</button>
						<button class="btn btn-rounded btn-bg-green">
							Tags
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
								<path fill="#fff" d="m9.086 1.75 8.25 1.179 1.178 8.25-7.66 7.66a.833.833 0 0 1-1.179 0l-8.25-8.25a.833.833 0 0 1 0-1.179l7.661-7.66Zm.59 1.768L3.192 10l7.072 7.07 6.481-6.48-.883-6.188-6.188-.884Zm1.767 5.303A1.667 1.667 0 1 1 13.8 6.464a1.667 1.667 0 0 1-2.357 2.357Z"/>
							</svg>
						</button>
					</div>
				</form>
			</div>
		</section>
		<!--=============== BLOG - LIST SECTION ===============-->
		<section class="b__content">
			<div class="b__content__container">
				<article class="b__content__article">
					<NuxtLink to="blog/1" class="b__content__article__link">
						<div class="b__content__article__img"></div>
						<div class="b__content__article__title">
							<h2>How to store a basket against a user in Ucommerce efficiently</h2>
							<time>Friday, 8 December, 2023</time>
						</div>
					</NuxtLink>
					<div class="b__content__article__text">
						<p>The IssueWe recently had an issue where a client informed us that their E-commerce website was timing out during the checkout flow, causing issues where payment was taken and the basket was not ...</p>
						<NuxtLink to="#" class="btn btn-rounded btn-bg-green cta">Read This Article</NuxtLink>
					</div>
				</article>
				<article class="b__content__article">
					<NuxtLink to="blog/2" class="b__content__article__link">
						<div class="b__content__article__img">
							<img src="~assets/images/case-studies/redspeed.webp" alt="Blog article image" />
						</div>
						<div class="b__content__article__title">
							<h2>High database CPU usage while checking out on Ucommerce</h2>
							<time>Tuesday, 28 November, 2023</time>
						</div>
					</NuxtLink>
					<div class="b__content__article__text">
						<p>Performance issues with Ucommerce checking out? It's worth checking the indexes on the queries that are being run. Here are some helpful pointers ...</p>
						<NuxtLink to="#" class="btn btn-rounded btn-bg-green cta">Read This Article</NuxtLink>
					</div>
				</article>
				<article class="b__content__article">
					<NuxtLink to="blog/3" class="b__content__article__link">
						<div class="b__content__article__img"></div>
						<div class="b__content__article__title">
							<h2>UCommerce Vague scratch indexer errors, not quite what it seems</h2>
							<time>Wednesday, 12 July, 2023</time>
						</div>
					</NuxtLink>
					<div class="b__content__article__text">
						<p>I hit a problem recently where I was working with Ucommerce and linking it up to Sitefinity as an eCommerce solution. As part of this task, I decided that I would set up uCommerce as it needed to be ...</p>
						<NuxtLink to="#" class="btn btn-rounded btn-bg-green cta">Read This Article</NuxtLink>
					</div>
				</article>
			</div>
		</section>
		<!--=============== BLOG - PAGGINATION SECTION ===============-->
		<section class="b__paggination">
			<div class="b__paggination__container">
				<div class="b__paggination__container__btns">
					<button class="btn btn-rounded btn-outline">Newer</button>
					<div>
						Pages
						<span>2</span>
						<span class="teal-txt">of</span>
						<span class="teal-txt">9</span>
					</div>
					<button class="btn btn-rounded btn-outline">Older</button>
				</div>
			</div>
		</section>
		<!--=============== TESTIMONIALS ===============-->
		<Testimonial :testimonial="useGetTestimonial(1)" class="mb-4" />
	</main>
</template>

<script setup>
    useGetMeta();
</script>