import {createFileRoute} from '@tanstack/react-router';
import {AdminCollection} from '@/components/planterra/admin';
import {pageHead} from '@/data/store';
export const Route=createFileRoute('/admin/testimonials')({head:()=>({...pageHead('Testimonials Admin','PLANTERRA frontend demo administration.'),meta:[...pageHead('Testimonials Admin','PLANTERRA frontend demo administration.').meta,{name:'robots',content:'noindex,nofollow'}]}),component:Page});
function Page(){return <AdminCollection module="testimonials"/>}
