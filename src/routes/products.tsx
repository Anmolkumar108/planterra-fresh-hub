import {createFileRoute} from '@tanstack/react-router';
import {PublicLayout,PageBanner,ProductsSection} from '@/components/planterra/public';
import {pageHead} from '@/data/store';
export const Route=createFileRoute('/products')({head:()=>pageHead('Our Products','Explore fresh vegetables, fruits, seasonal crops and wholesale agro products.'),component:Page});
function Page(){return <PublicLayout><PageBanner title="Our Products" description="Explore fresh vegetables, fruits, seasonal crops and wholesale agro products."/><ProductsSection/></PublicLayout>}
