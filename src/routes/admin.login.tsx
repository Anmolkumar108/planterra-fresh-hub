import {createFileRoute} from '@tanstack/react-router';
import {AdminLogin} from '@/components/planterra/admin';
import {pageHead} from '@/data/store';
export const Route=createFileRoute('/admin/login')({head:()=>({...pageHead('Login Admin','PLANTERRA frontend demo administration.'),meta:[...pageHead('Login Admin','PLANTERRA frontend demo administration.').meta,{name:'robots',content:'noindex,nofollow'}]}),component:Page});
function Page(){return <AdminLogin/>}
