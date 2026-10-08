import {createFileRoute} from '@tanstack/react-router';
import {HomePage} from '@/components/planterra/public';
import {pageHead} from '@/data/store';
export const Route=createFileRoute('/')({head:()=>pageHead('Farm Fresh & Agricultural Products','PLANTERRA BY AGRI ALL FARM FRESH connects freshness, quality sourcing and reliable agricultural supply in Pune, Maharashtra.'),component:HomePage});
