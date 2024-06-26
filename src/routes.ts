import { compareStrings } from './helpers/strings'
import { compareNumbers } from './helpers/numbers'

const PrimaryRouteGrade = 1 as const
const SecondaryRouteGrade = 2 as const
type RouteGrade = typeof PrimaryRouteGrade | typeof SecondaryRouteGrade

export type Route = {
  text: string
  link: string
  grade: RouteGrade,
  order: number,
}

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
    text: 'About',
    link: '/about',
    grade: PrimaryRouteGrade,
    order: 40,
  },
  {
    text: 'Privacy Policy',
    link: '/privacy-policy',
    grade: SecondaryRouteGrade,
    order: 50,
  },
]

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