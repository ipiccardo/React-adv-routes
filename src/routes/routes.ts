import { lazy, LazyExoticComponent } from 'react';
// import { LazyPge1, LazyPge2, LazyPge3 } from '../01-lazyload/pages'

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    name: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;

}

const Lazy1 = lazy(() => import('../01-lazyload/pages/LazyPge1'))
const Lazy2 = lazy(() => import('../01-lazyload/pages/LazyPge2'))
const Lazy3 = lazy(() => import('../01-lazyload/pages/LazyPge3'))


export const routes: Route[] = [
    {
        to: '/Lazy1',
        path: 'Lazy1',
        Component: Lazy1,
        name: 'Lazy-1'    
    },
    {
        to: '/Lazy2',
        path: 'Lazy2',
        Component: Lazy2,
        name: 'Lazy-2'    
    },
    {
        to: '/Lazy3',
        path: 'Lazy3',
        Component: Lazy3,
        name: 'Lazy-3'    
    },
]