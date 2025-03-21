import axios from "axios";
import { POKOMON_BASE_URL } from "@/utils/constatant";
import { IPokemonListResponse } from "@/interface/pokemonList";
import { handleReponse,IResponse } from '@/utils/handleResponse'


interface IGetPokemonListResponse extends IResponse{
  status: number | undefined;
  data?: IPokemonListResponse;
}

export const pokemonListServices = {
  getPokemonList: async (
    ilmit?: number,
    offset?: number
  ): Promise<IGetPokemonListResponse> => {
    try {
        const response = await axios.get(
      `${POKOMON_BASE_URL}/pokemon?limit=${ilmit || 151}&offset=${offset || 0}`
    );
    return handleReponse.success(response);
    } catch (error:any) {
        return handleReponse.error(error)
    }

    
  },
};
