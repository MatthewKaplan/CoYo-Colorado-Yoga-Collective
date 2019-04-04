import data from '../data.js';

export default function search(searchQuery) {
  const results = [];
  let query = searchQuery.toLowerCase();

  let matchingStudios = data.studios.filter(studio => studio.name.toLowerCase().includes(query));
  matchingStudios.forEach(match => results.push(match));

  return results;
}