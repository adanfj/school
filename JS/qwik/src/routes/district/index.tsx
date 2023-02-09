import { component$, useClientEffect$, useStore } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import districts from '~/lib/districts';

export default component$(() => {
    const data = useStore({districtsToShow:[...districts],searchQuery:""})
    /* useClientEffect$(async()=>{
        data.districts = await (await fetch("https://jsonplaceholder.typicode.com/albums")).json()
        data.districtsToShow = JSON.parse(JSON.stringify(data.districts));
        console.log(data.districtsToShow);
    }) */
    const keys = Object.keys(districts[0]).filter(k=>k.match(/superficie|denominac|habitantes|capital/gi))
    return (
        <>
        <input value={data.searchQuery} onInput$={(e:any)=>{
            data.searchQuery = e.target?.value;
            // data.districtsToShow=data.districts.filter((district:any)=>district["Denominacion"].toLowerCase().startsWith(data.searchQuery.toLowerCase()))
        }} />

        {data.districtsToShow.length?<table class="table table-striped">
            <thead class="table-success">
                <tr>
                    {keys.map(key => <td>{key}</td>)}
                </tr>
            </thead>
            <tbody>
                {data.districtsToShow.map((district: any) => <tr>
                    {keys.map(key => <td onClick$={()=>{
                        alert(JSON.stringify(district).replace(/[{}]/,"").replace(/":"/,"\n"))
                    }}>{district[key]}</td>)}
                </tr>)}
            </tbody>
        </table>:<></>}
        </>
    );
});

export const head: DocumentHead = {
    title: 'Qwik Flower',
};
