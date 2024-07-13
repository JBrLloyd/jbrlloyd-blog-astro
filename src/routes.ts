import { compareStrings } from './helpers/string'
import { compareNumbers } from './helpers/number'

const PrimaryRouteGrade = 1 as const
const SecondaryRouteGrade = 2 as const
type RouteGrade = typeof PrimaryRouteGrade | typeof SecondaryRouteGrade

export type Route = {
  text: RouteText
  link: string
  grade: RouteGrade,
  order: number,
}

export type RouteText = 'Home' | 'Blog' | 'Privacy Policy' // | 'Resume'

export const staticRoutes: Route[] = [
  {
    text: 'Home',
    link: '/',
    grade: PrimaryRouteGrade,
    order: 10,
  },
  {
    text: 'Blog',
    link: '/blog',
    grade: PrimaryRouteGrade,
    order: 20,
  },
  {
    text: 'Privacy Policy',
    link: '/privacy-policy',
    grade: SecondaryRouteGrade,
    order: 30,
  },
] as const;

export const routeSortCompare = (routeA: Route, routeB: Route) => {
  if (routeA.order === routeB.order) {
    return compareStrings(routeA.text, routeB.text)
  }

  return compareNumbers(routeA.order, routeB.order)
};

export const sortedAllStaticRoutes = () => staticRoutes
    .sort(routeSortCompare)

export const sortedPrimaryStaticRoutes = () => staticRoutes
    .filter(r => r.grade === PrimaryRouteGrade)
    .sort(routeSortCompare)