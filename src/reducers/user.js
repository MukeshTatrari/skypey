import { generateUser } from "../data/static-data";
export default function user(state = generateUser(), action) {
  return state;
}