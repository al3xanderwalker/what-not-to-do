import { writable } from 'svelte/store';

export const posts = writable<{ id: number; title: string; content: string; date: string }[]>([]);
