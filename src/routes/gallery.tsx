import {createFileRoute} from '@tanstack/react-router';
import {PublicLayout,PageBanner,GallerySection} from '@/components/planterra/public';
import {pageHead} from '@/data/store';
export const Route=createFileRoute('/gallery')({head:()=>pageHead('Agricultural Gallery','Explore fields, fresh produce, harvesting and agriculture in our visual collection.'),component:Page});
function Page(){return <PublicLayout><PageBanner title="Agricultural Gallery" description="Explore fields, fresh produce, harvesting and agriculture in our visual collection."/><GallerySection/></PublicLayout>}
