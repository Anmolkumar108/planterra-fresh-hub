import {createFileRoute} from '@tanstack/react-router';
import {AdminEditor} from '@/components/planterra/admin';
import {pageHead} from '@/data/store';
export const Route=createFileRoute('/admin/settings')({head:()=>({...pageHead('Settings Admin','PLANTERRA frontend demo administration.'),meta:[...pageHead('Settings Admin','PLANTERRA frontend demo administration.').meta,{name:'robots',content:'noindex,nofollow'}]}),component:Page});
function Page(){return <AdminEditor module="settings"/>}
