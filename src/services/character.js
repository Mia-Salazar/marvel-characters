const LIMIT = 50;

export const fetchCharacter = async () => {
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

export const findCharacter = async (name) => {
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
