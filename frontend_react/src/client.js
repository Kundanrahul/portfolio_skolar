
import  { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
// import myConfiguredSanityClient from './sanityClient';

export const client = createClient({
    projectId: "l81k8u3n",
    apiVersion: '2021-08-31',
    dataset: 'production',
    useCdn: true,
    
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
