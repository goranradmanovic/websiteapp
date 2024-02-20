import sitemap from '~/data/seo/site-map.json';

export const useGetMeta = (dynamicMeta = {}) => {

	if(!sitemap?.length) return; // If file don't exists

	const defaultMeta = sitemap[0].meta, // default/shared meta data shared on all webpages
		currentPage = useRoute().path === '/' ? 'home' : useRoute().path.split('/').pop(), // Gettign the current page
		data = sitemap.find(item => item.id === currentPage); // Current page meta (home, what we do, who we are, ect.)

	let seoMeta = data ? { ...data.meta, ...defaultMeta } : { ...dynamicMeta, ...defaultMeta }; // Merging static and dynamic meta data
	
	useSeoMeta(seoMeta); // Output meta data to page head
}
