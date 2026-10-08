import {createFileRoute} from '@tanstack/react-router';
import {PublicLayout,PageBanner,AboutSection,Trust,FocusSection,Reasons} from '@/components/planterra/public';
import {pageHead} from '@/data/store';
export const Route=createFileRoute('/about')({head:()=>pageHead('About PLANTERRA','Our agriculture-first identity, quality mindset and customer focus.'),component:Page});
function Page(){return <PublicLayout><PageBanner title="About PLANTERRA" description="Our agriculture-first identity, quality mindset and customer focus."/><AboutSection full/><Trust/><FocusSection/><Reasons/></PublicLayout>}
