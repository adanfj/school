import { component$, useStore } from "@builder.io/qwik";


export default component$(({items}:{items:string[]}) => {
    const store = useStore({
        visible:false
    })
    return (<div class="btn-group">
        <button type="button" class="btn btn-danger" onClick$={()=>{store.visible=true}}>
            Action
        </button>
        {store.visible&&<ul class="dropdown-menu">
            {items.map(item=><li><a class="dropdown-item" >{item}</a></li>)}
            {/* <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li> */}
        </ul>}
    </div>)

})