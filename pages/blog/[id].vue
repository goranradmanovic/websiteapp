<template>
	<main class="wrapper">
		<!--=============== BLOG DETAILS - HERO BLOG SECTION - (bd) ===============-->
		<section class="hero bd bg-img">
			<div class="hero__container">
				<img src="~assets/images/icons/utils/quote-light.svg" alt="Qoute Icon" class="hero__bd__icon" />
			</div>
		</section>
		<!--=============== BLOG DETAILS - ARTICLE SECTION ===============-->
		<section class="bd__content">
			<div class="bd__content__container">
				<article class="bd__content__article">
					<div class="card card-lr-radius-m bd__content__article__card">
						<h1>High database CPU usage while checking out on Ucommerce</h1>
						<div class="bd__content__article__card__info">
							<div class="bd__content__article__card__info__author">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="40">
									<g clip-path="url(#a)">
										<path fill="#EAD3D9" d="M10 20c5.522 0 10-4.478 10-10S15.522 0 10 0 0 4.478 0 10s4.478 10 10 10ZM0 20c0 11.043 8.957 20 20 20V20H0Z"/>
									</g>
									<defs>
										<clipPath id="a">
											<path fill="#fff" d="M0 0h20v40H0z"/>
										</clipPath>
									</defs>
								</svg>
								<div>
									<h3>Tim Gaunt</h3>
									<span>CEO</span>
								</div>
							</div>
							<time>Tuesday, 28 November, 2023</time>
						</div>
					</div>
					<div class="bd__content__article__text">
						<h2>Why SafeLives chose TSD</h2>
						<p>SafeLives had options but chose TSD for one compelling reason: a comprehensive, empathetic understanding of their unique challenges. Beyond just offering a competitive price, TSD included project management support, an essential but often overlooked component for success. This level of care signalled to SafeLives that they were more than just another project; they were a partner in impact.</p>
					</div>
					<div class="bd__content__article__text">
						<h2>The Solution</h2>
						<p>TSD delivered an intuitive, secure, and efficient platform with multiple data entry options, advanced graphing capabilities, and robust inline data validation. This multi-faceted solution allowed for:</p>
						<ul>
							<li>Fast-moving project lifecycle</li>
							<li>Regular touchpoints for project updates</li>
							<li>A seamless and familiar user experience that mimicked the SafeLives website</li>
							<li>Significant improvements in data quality and validation</li>
						</ul>
					</div>
					<div class="bd__content__article__text">
						<h2>The Results</h2>
						<p>Since the implementation of the new platform, SafeLives has experienced a noticeable increase in user satisfaction. The organization is now better equipped to handle the intricacies of data collection and dissemination, which is critical for those on the frontline of domestic abuse intervention. Most importantly, SafeLives can now focus more on their mission, knowing that their platform is reliable and efficient.</p>
						<p><q>It’s been a pleasure—TSD has been more than just a service provider; they've been a valuable partner in helping us serve our community better.</q> — Martha Tomlinson, SafeLives</p>
					</div>
					<div class="bd__content__article__text">
						<h2>Key Takeaway</h2>
						<p>TSD's approach is not just about providing a service; it's about understanding the intricacies of each client's needs and becoming an integral part of their mission. Our comprehensive and thoughtful approach is why organizations like SafeLives trust us with their most critical projects.</p>
					</div>
					<div class="bd__content__article__footer">
						<div class="bd__content__article__footer__share">
							<h3>Share</h3>
							<NuxtLink to="#">
								<img src="~assets/images/icons/social-media/share.svg" alt="Share Icon" />
							</NuxtLink>
							<NuxtLink to="#">
								<img src="~assets/images/icons/social-media/facebook.svg" alt="Facebook Icon" />
							</NuxtLink>
							<NuxtLink to="#">
								<img src="~assets/images/icons/social-media/x.svg" alt="X Icon" />
							</NuxtLink>
							<NuxtLink to="#">
							<img src="~assets/images/icons/social-media/linkedin.svg" alt="LinkedIn Icon" />
							</NuxtLink>
						</div>
						<div class="bd__content__article__footer__btns">
							<button class="btn btn-rounded btn-bg-green">Previous</button>
							<button class="btn btn-rounded btn-bg-green">Next</button>
						</div>
					</div>
				</article>
				<aside class="bd__content__aside">
					<form action="" method="post" autocomplete="off" target="_self" class="bd__content__aside__form" id="aside-search-form">
						<div class="form__group">
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
						<div class="form__group">
							<input type="text" id="b-search" name="b-search" class="form__group__input" placeholder="Search" />
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
								<path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617Zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7 3.133 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15Z"/>
							</svg>
						</div>
					</form>
					<div class="bd__content__aside__cat">
						<h3>Categories</h3>
						<div class="card card-lr-radius-xs bd__content__aside__tag">UCommerce</div>
					</div>
					<div class="bd__content__aside__tags">
						<h3>Tags</h3>
						<div class="card card-lr-radius-xs bd__content__aside__tag">UCommerce</div>
						<div class="card card-lr-radius-xs bd__content__aside__tag">Facets</div>
						<div class="card card-lr-radius-xs bd__content__aside__tag">Useful Script</div>
					</div>
					<div class="bd__content__aside__articles">
						<h3>Recent Articles</h3>
						<NuxtLink to="#">
							<h2>Blog Heading Goes Here</h2>
							<time>15 December</time>
						</NuxtLink>
						<NuxtLink to="#">
							<h2>Blog Heading Goes Here</h2>
							<time>07 September</time>
						</NuxtLink>
						<NuxtLink to="#">
							<h2>Blog Heading Goes Here</h2>
							<time>19 July</time>
						</NuxtLink>
						<NuxtLink to="#">
							<h2>Blog Heading Goes Here</h2>
							<time>26 April</time>
						</NuxtLink>
					</div>
				</aside>
			</div>
		</section>
	</main>
</template>

<script setup>
    useGetMeta();
</script>