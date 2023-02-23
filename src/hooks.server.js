import { loading } from '$lib/store';

export const handle = async ({ event , resolve }) => {

    loading.on();
    
    const user = event.cookies.get('uid');
    
    event.locals.user = user ? user : null;

    if(!user && event.url.pathname !== '/') return Response.redirect(`${event.url.origin}/`);
    
    if(!!user && event.url.pathname === '/') return Response.redirect(`${event.url.origin}/v1`);

    const response = await resolve(event);

    return response;
}