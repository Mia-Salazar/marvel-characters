import { useQuery } from '@tanstack/react-query';

import { fetchCharacter } from '../character';

export const useSearchCharacterQuery = () => {
  const query = useQuery({
    queryKey: ['character'],
    queryFn: async () => {
      const data = await fetchCharacter();

      return data;
    },
    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24,
  });

  return query;
};
