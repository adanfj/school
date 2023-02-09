import { component$,useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import bootstrap from "bootstrap/dist/css/bootstrap.min.css?inline";
import "bootstrap/dist/js/bootstrap.bundle"
export default component$(() => {
    useStylesScoped$(bootstrap);
    return (
        <>
            <form>
                <div class="row align-items-center g-2">
                    <div class="col-12">
                        <div class="input-group ">
                            <div class="input-group-prepend">
                                <div class="input-group-text">Nome completo</div>
                            </div>
                            <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username" />
                            <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username" />
                        </div>
                    </div>

                    <div class="col-12">
                        {/* <label class="sr-only" for="inlineFormInputGroup">Username</label> */}
                        <div class="input-group ">
                            <div class="input-group-prepend">
                                <div class="input-group-text">@</div>
                            </div>
                            <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username" />
                        </div>
                    </div>

                    <div class="col-4">
                        <label class="sr-only" for="inlineFormInputGroup">Código postal</label>
                        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username" />
                    </div>

                    <div class="col-4">
                        <label class="sr-only" for="inlineFormInputGroup">Código postal</label>
                        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username" />
                    </div>

                    <div class="col-4">
                        <label class="sr-only" for="inlineFormInputGroup">Código postal</label>
                        <div class="btn-group form-control p-0">
                            <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="sr-only">Toggle Dropdown</span>
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Separated link</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-4">
                        <label class="sr-only" for="inlineFormInputGroup">Código postal</label>
                        <textarea class="form-control" id="inlineFormInputGroup" placeholder="Username" />
                    </div>
                    <div class="w-100"></div>
                    <div class="col-4">
                        <div class="input-group g-2 row">
                            <label class="sr-only text-success col">Código postal <input type="checkbox" class="" id="inlineFormInputGroup" /></label>
                            <label class="sr-only text-success col " >Código postal <input type="checkbox" class="" id="inlineFormInputGroup" /></label>
                            <label class="sr-only text-success col " >Código postal <input type="checkbox" class="" id="inlineFormInputGroup" /></label>
                            
                        </div>
                    </div>
                    <div class="col-12">
                        <label class="sr-only form-label">s</label>
                            <select class="form-select" id="inputGroupSelect04">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                    </div>
                    <div class="col-12">
                        <div class="input-group">
                            <select class="form-select" multiple aria-label="multiple select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary ">Submit</button>
                    </div>

                </div>
            </form>
        </>
    );
});

export const head: DocumentHead = {
    title: 'Qwik Flower',
};
