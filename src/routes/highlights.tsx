import {createFileRoute} from '@tanstack/react-router';
import {PublicLayout,PageBanner,Highlights} from '@/components/planterra/public';
import {pageHead} from '@/data/store';
export const Route=createFileRoute('/highlights')({head:()=>pageHead('Our Agricultural Highlights','Illustrative portfolio showcases inspired by fresh produce and seasonal agriculture.'),component:Page});
function Page(){return <PublicLayout><PageBanner title="Our Agricultural Highlights" description="Illustrative portfolio showcases inspired by fresh produce and seasonal agriculture."/><Highlights/></PublicLayout>}
