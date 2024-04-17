import "server-only";

const baseUrl = "https://pokeapi.co/api/v2";

export const PokemonAPI = {
  get: async function (name, options = undefined) {
    const response = await fetch(`${baseUrl}/pokemon/${name}`, {
      method: "GET",
      ...options,
    });

    return await response.json();
  },
  getPaginated: async function (
    { limit = 10, offset = 0 },
    options = undefined
  ) {
    const queryParams = new URLSearchParams({
      limit: limit,
      offset: offset,
    });

    const response = await fetch({
      url: `${baseUrl}/pokemon?${queryParams}`,
      method: "GET",
      ...options,
    });

    return await response.json();
  },
};
