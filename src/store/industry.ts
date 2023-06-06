import { writable } from 'svelte/store';

export const industry = writable<{name: string}[]>([]);