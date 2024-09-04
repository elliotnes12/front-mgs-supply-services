import { useContext } from "react";
import { LocationContext } from "../../../contexts";

export const useLocation = () => useContext(LocationContext);