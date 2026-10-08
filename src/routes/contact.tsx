import {createFileRoute} from '@tanstack/react-router';
import {ContactPage} from '@/components/planterra/public';
import {pageHead} from '@/data/store';
export const Route=createFileRoute('/contact')({validateSearch:(search:Record<string,unknown>)=>({product:typeof search.product==='string'?search.product:''}),head:()=>pageHead('Contact PLANTERRA','Contact PLANTERRA in Pune for fresh produce and agricultural supply enquiries. Call 9323477909.'),component:Page});
function Page(){const {product}=Route.useSearch();return <ContactPage product={product}/>;}
