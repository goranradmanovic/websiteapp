<template>
  <main class="wrapper">
    <CaseStudiesContent />
    <!--=============== TESTIMONIALS ===============-->
    <Testimonial :testimonial="useGetTestimonial(1)" class="p-block-5 bg-clr-white-teal" />
  </main>
</template>

<script setup>
    useGetMeta();
</script>