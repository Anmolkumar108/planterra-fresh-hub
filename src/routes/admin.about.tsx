import {createFileRoute} from '@tanstack/react-router';
import {AdminEditor} from '@/components/planterra/admin';
import {pageHead} from '@/data/store';
export const Route=createFileRoute('/admin/about')({head:()=>({...pageHead('About Admin','PLANTERRA frontend demo administration.'),meta:[...pageHead('About Admin','PLANTERRA frontend demo administration.').meta,{name:'robots',content:'noindex,nofollow'}]}),component:Page});
function Page(){return <AdminEditor module="about"/>}
