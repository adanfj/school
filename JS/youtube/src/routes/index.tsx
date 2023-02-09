import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import Dropdown from '~/components/gui/Dropdown';
import ListGroup from '~/components/gui/ListGroup';
import ListGroupItem from '~/components/gui/ListGroupItem';
import NavBar from '~/components/gui/NavBar';

export default component$(() => {
  return (
    <div class="container-fluid">
    <NavBar brand="Test" items={[]} form={true} searchBar={true}/>
    <br />
    <div class="row">
      <div class="d-none d-md-block col-md-2">
      <ListGroup>
        <ListGroupItem>
        <i class="fa-sharp fa-solid fa-house"></i> Home
        </ListGroupItem>
        <ListGroupItem>
        <i class="fa-sharp fa-solid fa-film"></i> (Eat my) Shorts
        </ListGroupItem>
      </ListGroup>
      <hr/>
      <ListGroup>
        <ListGroupItem>
        <i class="fa-sharp fa-solid fa-photo-film"></i> Library
        </ListGroupItem>
        <ListGroupItem>
        <i class="fa-sharp fa-solid fa-clock"></i> History
        </ListGroupItem>
      </ListGroup>
      </div>
      <div class="col">
        <div class="w-100" style={{
          backgroundImage:"url(https://upload.wikimedia.org/wikipedia/commons/6/6a/Vistas_Aloia_2.JPG)",
          height:"200px",
          backgroundPosition:"center"
        }}></div>
        <div class="container px-5 py-3">
          <div className="d-flex justify-content-between">
            <div className="row g-3">
              <div className="rounded-circle d-none d-sm-block bg-primary" style={{
                width:"64px",
                height:"64px",
              }}></div>
              <div class="col">
                <span className="display-6">Adan FJ</span><br />
                <span>@adanfj</span><br />
                <span>20 subs</span>
              </div>
            </div>
            <div class="row py-5">
              <button className="btn btn-secondary rounded-pill col">Join</button>
              <div className="col">
              <Dropdown items={["Subscribed"]}></Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
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
