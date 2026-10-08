import {createFileRoute} from '@tanstack/react-router';
import {PublicLayout,PageBanner,ApproachSection,QualitySection,Journey,Reasons} from '@/components/planterra/public';
import {pageHead} from '@/data/store';
export const Route=createFileRoute('/approach')({head:()=>pageHead('Our Approach','Thoughtful sourcing, careful selection and reliable farm-to-market connections.'),component:Page});
function Page(){return <PublicLayout><PageBanner title="Our Approach" description="Thoughtful sourcing, careful selection and reliable farm-to-market connections."/><ApproachSection/><QualitySection/><Journey/><Reasons/></PublicLayout>}
