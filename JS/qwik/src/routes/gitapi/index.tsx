import { component$, useStore } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default component$(() => {
    const getUsers = async(list:string[])=>{
        return Promise.all(list.map(async(u)=>{
            return (await fetch(`https://api.github.com/users/${u}`)).json()
        }))
    }
    const data = useStore({
        users: []
    },{
        reactive:true
    });
    (async () => {
        const res = await fetch("https://api.github.com/users",
            {
                method: "GET",
                headers: {
                    "Authorization": "Bearer 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",
                    "Accept": "application/vnd.github+json",
                    "X-GitHub-Api-Version":"2022-11-28"
                }
            })
        data.users = await res.json();
        console.log(data.users);
    })()
    return (
        <div class="container">
            <div class="row text-center">
                {JSON.stringify(data.users)}
            </div>
        </div>
    );
});

export const head: DocumentHead = {
    title: 'GIthub API',
};
