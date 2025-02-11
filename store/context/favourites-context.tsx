import { createContext, ReactNode, useState } from "react";

export const FavouritesContext = createContext({
  ids: [] as string[],
  addFavourite: (id: string) => {},
  removeFavourite: (id: string) => {},
});

export default function FavouritesContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [favouriteMealIds, setFavouriteMealIds] = useState<string[]>([]);

  function addFavourite(id: string) {
    setFavouriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavourite(id: string) {
    setFavouriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favouriteMealIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
}
