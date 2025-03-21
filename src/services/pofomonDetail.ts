import axios from "axios"
import { POKOMON_BASE_URL } from '@/utils/constatant'
import { IPokemonDetailResponse } from "@/interface/pokemonDetail"
import { handleReponse, IResponse } from "@/utils/handleResponse"

interface IGetPokemonDetailResponse extends IResponse {
    status: number | undefined,
    data?: IPokemonDetailResponse,
}

export const pokemonDetailServices = {
    getPokemonDetail: async (name: string): Promise<IGetPokemonDetailResponse> => {
        try {
            const response = await axios.get(
                `${POKOMON_BASE_URL}/pokemon/${name}`
            );
            return handleReponse.success(response);
        } catch (error: any) {
            return handleReponse.error(error)
        }
    },


    }