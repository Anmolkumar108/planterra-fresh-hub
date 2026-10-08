import {createFileRoute} from '@tanstack/react-router';
import {AdminEnquiries} from '@/components/planterra/admin';
import {pageHead} from '@/data/store';
export const Route=createFileRoute('/admin/enquiries')({head:()=>({...pageHead('Enquiries Admin','PLANTERRA frontend demo administration.'),meta:[...pageHead('Enquiries Admin','PLANTERRA frontend demo administration.').meta,{name:'robots',content:'noindex,nofollow'}]}),component:Page});
function Page(){return <AdminEnquiries/>}
