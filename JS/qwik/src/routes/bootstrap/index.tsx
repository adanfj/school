import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default component$(() => {
  return (
    <div class="container">
      <div class="row text-center">
        <div class="col-12 bg-success border">
          Header
        </div>
        <div class="bg-danger col-6 col-sm-3 border offset-md-3">1</div>
        <div class="bg-danger col-6 col-sm-3 border">2</div>
        <div class="bg-danger col-6 col-sm-3 border offset-md-3">3</div>
        <div class="bg-danger col-6 col-sm-3 border offset-md-3">4</div>
        <div class="col-12 bg-info d-none d-sm-block">Tablet</div>
        <div class="bg-secondary col-6 col-sm-3 border">1</div>
        <div class="bg-secondary col-6 col-sm-3 border">2</div>
        <div class="bg-secondary col-6 col-sm-3 border">3</div>
        <div class="bg-secondary col-6 col-sm-3 border">4</div>
        <div class="col-12 bg-info d-sm-none">Móbil</div>
        <div class="col-12 offset-md-3 bg-warning col-sm-6 col-md-3 border">y</div>
        <div class="d-none d-sm-block bg-warning col-sm-6  col-md-3 border">x</div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Flower',
};
