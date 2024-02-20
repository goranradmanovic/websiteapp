import testimonials from '~/data/testimonials/data.json';

export const useGetTestimonial = id => testimonials.find(item => item.id === id);