/** @type {import('./$types').LayoutLoad} */

import { initializeFirebase } from '$lib/firebase';
import { browser } from '$app/environment';

export async function load({ url }) {
    if (browser) {
        try {
            initializeFirebase();
        } catch (ex) {
            console.error(ex);
        }
    }

    return {
        url: url.pathname
    };
}