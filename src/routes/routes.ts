import Nolazy from '../01-lazyload/pages/Nolazy';
import { lazy, LazyExoticComponent } from 'react';;


const LazyLayout = lazy(() => import('../01-lazyload/layout/LazyLayout'))


type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    name: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    
}


export const routes: Route[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'lazyLayout'    
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: Nolazy,
        name: 'No Lazy'    
    },

]


export default Route