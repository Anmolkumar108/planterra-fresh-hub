import {createFileRoute} from '@tanstack/react-router';
import {AdminDashboard} from '@/components/planterra/admin';
import {pageHead} from '@/data/store';
export const Route=createFileRoute('/admin/dashboard')({head:()=>({...pageHead('Dashboard Admin','PLANTERRA frontend demo administration.'),meta:[...pageHead('Dashboard Admin','PLANTERRA frontend demo administration.').meta,{name:'robots',content:'noindex,nofollow'}]}),component:Page});
function Page(){return <AdminDashboard/>}
