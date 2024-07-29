import type { APIRoute } from 'astro';
import Fuse from 'fuse.js';
import { getAllBlogPosts, sortPostsByPublishDesc, type BlogPostData } from "@src/accessors/astro/blogAccessor";
import { handlePaginationRequest } from '@src/api/handleRequest';
import { InvalidRequestQueryParameterError } from '@src/api/errors/InvalidRequestQueryParameterError';

export const prerender = false;

const searchTermParamKey = 'search_term';
const minSearchTermLength = 3;

export type GetBlogPostsItem = {
  slug: BlogPostData['slug']
} & BlogPostData['data']

export const GET: APIRoute = async ({ request }) => {
  const requestUrl = new URL(request.url);
  
  return await handlePaginationRequest(
    requestUrl,
    async (): Promise<GetBlogPostsItem[]> => {
      let posts = await getAllBlogPosts();

      const searchTermParam = requestUrl.searchParams.get(searchTermParamKey);

      if (!!searchTermParam) {
        const searchTerm = searchTermParam.trim();

        if (searchTerm === '' || searchTerm.length < minSearchTermLength) {
          throw new InvalidRequestQueryParameterError(
            'Invalid request query parameter was empty or not long enough',
            `Invalid '${searchTermParamKey}' query parameter, search term should be non-whitespace and greater than ${minSearchTermLength - 1} characters, received: '${searchTerm}' (length: ${searchTerm.length}).`,
            requestUrl) 
        }

        const fuse = new Fuse(posts, {
          keys: ['data.title', 'data.author', 'data.description', 'body'],
          includeScore: true,
          shouldSort: true,
          minMatchCharLength: minSearchTermLength,
        })

        const searchResponse = fuse.search(searchTerm);

        posts = searchResponse
          .filter(r => r.score && r.score <= 0.75)
          .map(r => r.item);
      } else {
        sortPostsByPublishDesc(posts);
      }

      return posts
        .map(p => {
          const mapped: GetBlogPostsItem = {
            slug: p.slug,
            ...p.data,
          }

          return mapped;
        })
    }
  )
}