import { compareStrings } from './helpers/string'
import { compareNumbers } from './helpers/number'

const PrimaryRouteGrade = 1 as const
const SecondaryRouteGrade = 2 as const
type RouteGrade = typeof PrimaryRouteGrade | typeof SecondaryRouteGrade

export type Route = {
  text: string
  link: string
  grade: RouteGrade,
  order: number,
}

const routeKeys = [
  'home',
  'blog',
  'privacyPolicy'
] as const;

export type RouteKey = typeof routeKeys[number]

const routeMap: Record<RouteKey, Route> = {
  'home': {
    text: 'Home',
    link: '/',
    grade: PrimaryRouteGrade,
    order: 1,
  },
  'blog': {
    text: 'Blog',
    link: '/blog',
    grade: PrimaryRouteGrade,
    order: 2,
  },
  'privacyPolicy': {
    text: 'Privacy Policy',
    link: '/privacy-policy',
    grade: SecondaryRouteGrade,
    order: 3,
  },
} as const

type RouteMapType = typeof routeMap
export type RouteDetails<K extends RouteKey> = RouteMapType[K];

export const getRouteDetails = <K extends RouteKey>(key: K): RouteDetails<K> => routeMap[key]

export const getAllStaticRoutes = () => routeKeys
  .map(k => ({
    key: k,
    ...getRouteDetails(k)
  }));

export const routeSortCompare = (routeA: Route, routeB: Route) => {
  if (routeA.order === routeB.order) {
    return compareStrings(routeA.text, routeB.text)
  }

  return compareNumbers(routeA.order, routeB.order)
};

export const sortedAllStaticRoutes = () => getAllStaticRoutes()
    .sort(routeSortCompare)

export const sortedPrimaryStaticRoutes = () => getAllStaticRoutes()
    .filter(r => r.grade === PrimaryRouteGrade)
    .sort(routeSortCompare)