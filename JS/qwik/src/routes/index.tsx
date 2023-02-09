import { component$, useClientEffect$, useStore, useTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  const data = useStore({
    userId: 1,
    json: [],
    translatedAbilities: []
  } as any)
  const translate = async (ability: any) => {
    const res = await fetch(ability.url)
    return (await res.json()).names.find((e: any) => e.language.name == "es");
  }
  useClientEffect$(async () => {
    data.json = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 1000)}`)).json();
    data.json = { id: data.json.id, sprites: data.json.sprites, name: data.json.name, abilities: data.json.abilities }
    data.translatedAbilities = await Promise.all(data.json.abilities.map(async (a: any) => [{
      ...a,
      ...await translate(a.ability)
    }][0]))
    console.log(data.translatedAbilities)
  })
  return (
    <>
    {data.json.length?<>
      <h1>{data.json.name}</h1>
      <img style={{ width: "200px" }} src={data.json.sprites.front_default} alt="" />
      {data.translatedAbilities.length?data.translatedAbilities.map((a: any) => <p>- <a href={a.ability.url}>{a.name}</a></p>):<></>}
      </>:<></>}
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
