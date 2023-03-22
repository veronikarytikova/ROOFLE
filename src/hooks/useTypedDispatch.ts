import { useDispatch } from "react-redux";
import { TDispatch } from "store";

export const useTypedDispatch: () => TDispatch = useDispatch;