import { Navigate, Route, Routes } from "react-router-dom";

import { Character } from "./Character";
import { Characters } from "./Characters";

export const CharacterRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Characters />} />
      <Route path=":characterId" element={<Character />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
