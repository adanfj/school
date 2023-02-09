import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default component$(() => {
    return (
        <>
            {/* <div class="container">
                <table class="table">
                    <thead >
                        <tr class="table-success">
                            <th>ANO</th>
                            <th>Produto A</th>
                            <th>Produto B</th>
                            <th>Produto C</th>
                            <th>Produto D</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2009</td>
                        </tr>
                    </tbody>
                </table>
            </div> */}



            <div class="container ">
                <div class="row text-center">
                    <div class="col-12 p-3 bg-primary">Cabeceira</div>
                </div>
                <div class="row g-2">
                    
                    {[1, 2, 3, 4].map(n => <div class="col-12 col-sm-6 col-md-4">
                        <div class="card text-center">
                            <div class="card-header bg-secondary">
                                Cabeceira Card
                            </div>
                            <div class="card-body">
                                <img class="w-25" src="/BootStrap5.png" alt="Card image cap" />
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <button type="button" data-bs-toggle="modal" data-bs-target={"#modal"+n} class="btn btn-primary">Open modal {n}</button>
                            </div>
                        </div>
                        <div class="modal fade" id={'modal' + n} aria-labelledby={`modal${n}Label`} aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id={`modal${n}Label`}>Modal title</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                ...
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    </div>)}
                </div>
                <div class="row text-center">
                    <div class="col-12 p-3 bg-success">Footer</div>
                </div>
            </div>
        </>
    );
});

export const head: DocumentHead = {
    title: 'Qwik Flower',
};
