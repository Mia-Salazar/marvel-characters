const LIMIT = 50;

export const fetchCharacters = async () => {
  try {
    const response = await fetch(
      `https://dragonball-api.com/api/characters?limit=${LIMIT}`
    );
    if (!response.ok) throw new Error('Error al obtener los datos');
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const findCharacters = async (name) => {
  try {
    const response = await fetch(
      `https://dragonball-api.com/api/characters?name=${name}`
    );
    if (!response.ok) throw new Error('Error al obtener los datos');
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const findCharacter = async (id) => {
  try {
    const response = await fetch(
      `https://dragonball-api.com/api/characters/${id}`
    );
    if (!response.ok) throw new Error('Error al obtener los datos');
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
