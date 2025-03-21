import {  Type } from "@/interface/pokemonDetail";
import React from "react";
import { Link } from "react-router-dom";

interface PokemonProps {
  image:string
  name:string
  id: number
  types: Type[]
}

const PokemonCard = ({ image, name, id, types }: PokemonProps) => {
  return (
    <div className="max-w-sm p-[16px] bg-[#253641] overflow-hidden rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700 max-w-[275px] w-full m-[auto]">
      <div className="bg-[url('/image/poke-card-bg.png')] bg-center aspect-square w-full bg-cover rounded-[20px]">
        <Link to={`/detail/${name}`} className="">
          <img
            className="rounded-t-lg h-[218px] p-[40px] w-full"
            src={image}
            alt=""
          />
        </Link>
      </div>
      <div className="pt-5">
        <div className="flex justify-between">
          <h5 className="mb-2 capitalize text-xl font-bold tracking-tight text-white">
            {name}
          </h5>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-white">
            #{id}
          </h5>
        </div>

        <div className="flex gap-2 justify-end mt-[16px]">
          {types.map((item) => {
            return (
              <span
                className={`badge-type-${item.type.name} px-[14px] capitalize py-1 rounded-[16px]`}
              >
                {item.type.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
