<template>
	<main class="wrapper">
		<!--=============== CONTACT US - HERO SECTION ===============-->
		<section class="hero cu">
			<div class="hero__container">
				<div class="hero__text">
					<h1>
						<span class="hero__text--teal">Contact Us</span>
					</h1>
					<p>At TSD, we don't shy away from complexity - we embrace it. We thrive on solving the most intricate technical challenges that others may hesitate to approach.</p>
				</div>
			</div>
		</section>
		<!--=============== CONTACT US - FROM ===============-->
		<section class="cu__content">
			<div class="cu__content__container">
				<Form :validation-schema="validationSchema" @submit="onSubmit" class="cu__content__form">
					<div class="cu__content__form__group">
						<p class="card card-lr-radius-s cu__content__form__res__success">Thank you for contacting us.</p>
						<p class="card card-lr-radius-s cu__content__form__res__error">Error, please try again.</p>
					</div>
					<div class="cu__content__form__group">
						<label for="name">Your name</label>
						<Field name="name" type="text" id="name" placeholder="Enter text..." class="cu__content__form__input" />
						<ErrorMessage name="name" class="cu__content__form__error" />
					</div>
					<div class="cu__content__form__group">
						<label for="phone">Phone number</label>
						<Field name="phone" type="tel" id="phone" placeholder="Enter number..." class="cu__content__form__input" />
						<ErrorMessage name="phone" class="cu__content__form__error" />
					</div>
					<div class="cu__content__form__group">
						<label for="email">Email address</label>
						<Field name="email" type="email" id="email" placeholder="Enter email..." class="cu__content__form__input" />
						<ErrorMessage name="email" class="cu__content__form__error" />
					</div>
					<div class="cu__content__form__group">
						<label for="message">Message</label>
						<Field as="textarea" name="message" id="message" placeholder="Enter text..." class="cu__content__form__textarea" />
						<ErrorMessage name="message" class="cu__content__form__error" />
					</div>

					<div class="cu__content__form__group">
						<input type="submit" value="Submit" class="btn btn-rounded btn-bg-green cu__content__form__submit" />
					</div>
				</Form>

				<div class="cu__content__info">
					<p>The Site Doctor LTD, <br /> Court Farmhouse, <br /> Hole-in-the-Wall, <br /> Herefordshire, HR9 7JN</p>
					<div class="cu__content__info__box">
						<div>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
								<path fill="#fff" d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.421 11.421 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.421 11.421 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884Zm-2.522-.657 1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.45 12.45 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.441 12.441 0 0 1-.75-1.588Z"/>
							</svg>
							<a href="tel:+0121 31 45 374" class="">0121 31 45 374</a>
						</div>
						<div>
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
								<path fill="#fff" d="M2.5 2.5h15c.46 0 .833.373.833.833v13.334c0 .46-.373.833-.833.833h-15a.833.833 0 0 1-.833-.833V3.333c0-.46.373-.833.833-.833Zm14.167 3.532-6.607 5.916-6.727-5.935v9.82h13.334V6.032ZM3.76 4.167l6.292 5.551 6.199-5.551H3.76Z"/>
							</svg>
							<a href="mailto:clinic@tsd.digital" class="">clinic@tsd.digital</a>
						</div>
						<div>&copy; TSD 2023</div>
						<div>Co. Reg: 6502026</div>
						<div>Vat: 889598522 GB</div>
					</div>
				</div>
			</div>
		</section>
		<!--=============== TESTIMONIALS ===============-->
		<Testimonial :testimonial="useGetTestimonial(1)" class="mb-4" />
	</main>
</template>

<script setup>
	import { Form, Field, ErrorMessage } from 'vee-validate';
	import { toTypedSchema } from '@vee-validate/zod';
	import * as zod from 'zod';

    useGetMeta();

	const validationSchema = toTypedSchema(
		zod.object({
			name: zod.string().nonempty('This is required').min(3, { message: 'Too short text' }),
			phone: zod.string().nonempty('This is required').min(11, { message: 'Too short number' }).max(11, { message: 'Too big number' }),
			email: zod.string().nonempty('This is required').email({ message: 'Must be a valid email' }),
			message: zod.string().nonempty('This is required')
		})
	);

	const onSubmit = async values => {
		console.log(values); // Form values after validation

		// Replace 'API-LINK' with real API link for contact form
		//const { data: response } = await useFetch(API-LINK, { method: 'post', body: values }); // CODE

		// If resonse is successful show success message (add 'show' class to first element in the form with this class 'cu__content__form__res__success') or if it is error (add 'show' class to the first element in the form with this class 'cu__content__form__res__error')
		//if (response) console.log(response.value); // CODE
	}
</script>