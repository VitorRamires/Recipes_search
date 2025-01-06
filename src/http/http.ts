import type ICategory from "../interfaces/ICategories.ts";
import type IReceitas from "../interfaces/IReceitas.ts";

export async function ObterDados() {
  const response = await fetch(
    "https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/07e853b7d0626db51ce2e84bb2f15ca450b7bd7f/categorias.json"
  );

  const categorias: ICategory[] = await response.json();

  return categorias;
}

export async function ObterReceitas() {
  const response = await fetch(
    "https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json"
  );

  const receitas: IReceitas[] = await response.json();

  return receitas;
}
