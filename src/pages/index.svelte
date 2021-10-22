<script>
  import { metatags } from "@roxi/routify";
  import {
    ButtonSet,
    ListItem,
    OrderedList,
    Button,
    Grid,
    Column,
    Row,
  } from "carbon-components-svelte";

  metatags.title = "Home - transcribrrr";
  metatags.description = "I am Mr transcribrrr and my transcriptions go brrr";
</script>

<Grid>
  <Row>
    <Column sm={4} lg={8}>
      <h1 class="start-aligned">Lorem Ipsum</h1>
      <h2>Lorem ipsum dolor sit amet consectetur.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti cumque
        aut similique beatae distinctio nulla dolorem repellendus ut adipisci
        id? Iste, aliquid? Obcaecati quidem minus libero quia? In adipisci dolor
        quis. Aliquam incidunt iure temporibus inventore quo nisi, doloremque
        animi. Iure sed vero corrupti ipsam reiciendis accusamus dolorum,
        inventore minima?
      </p>
      <ButtonSet>
        <Button>Sign Up</Button>
        <Button kind="secondary">Log In</Button>
      </ButtonSet>
    </Column>
    <Column sm={4} lg={8}>
      <div class="img-container">
        <div class="imgWrap">
          <div class="image">This is supposed to be a cool graphic</div>
        </div>
        <h1>Lorem Ipsum</h1>
      </div>
    </Column>
  </Row>
</Grid>

<Grid padding={true}>
  <Row padding={true}>
    <Column sm={4} lg={8}>
      <h1>Heading</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facere
        eius eum unde accusamus, autem perferendis doloremque dolor placeat
        officiis laboriosam quisquam delectus voluptate distinctio voluptates?
        Totam ipsa quis architecto eaque, beatae explicabo iure voluptate alias
        at. Cumque, quidem! Amet.
      </p>
    </Column>
    <Column sm={4} lg={8}>
      <h1>Heading</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        impedit perspiciatis sequi facere aliquid fugit, animi quaerat vel eaque
        eius nostrum deserunt non ratione distinctio rem facilis ipsam nulla
        unde.
      </p>
    </Column>
  </Row>
  <Row>
    <Column sm={4} lg={8}>
      <h1>Heading</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit rem
        laboriosam magni. Et vel at, illo reiciendis eos rem mollitia.
      </p>
    </Column>
    <Column sm={4} lg={8}>
      <h1>Heading</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vel
        cupiditate maiores, dolores iusto quibusdam, temporibus libero
        exercitationem modi molestias cum ab. Ut, fuga odio non quam
        necessitatibus earum accusamus! Ex vel aperiam veritatis optio vero, eos
        quisquam omnis quia?
      </p>
    </Column>
  </Row>
  <Row>
    <Column sm={0} md={2} lg={4} />
    <Column sm={4} md={4} lg={8}>
      <h1 class="start-aligned">Sign Up Now</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sequi
        ratione, eius minus in quas.
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <OrderedList nested expressive>
        <ListItem>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </ListItem>
        <ListItem>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </ListItem>
        <ListItem>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </ListItem>
        <ListItem>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae earum
          repudiandae tempora?
        </ListItem>
      </OrderedList>
      <p>Lorem ipsum dolor sit amet.</p>
      <ButtonSet>
        <Button size="small">Sign Up</Button>
        <Button size="small" kind="secondary">Log In</Button>
      </ButtonSet>
    </Column>
    <Column sm={0} md={2} lg={4} />
  </Row>
</Grid>

<style>
  .img-container {
    position: relative;
    text-align: center;
    margin: "spacing-12" "spacing-4";
  }

  h1 {
    text-align: center;
    margin-top: "spacing-04";
    margin-bottom: "spacing-04";
  }

  h3 {
    margin-top: "spacing-04";
    margin-bottom: "spacing-04";
  }

  .start-aligned {
    text-align: start;
  }

  p {
    margin-bottom: "spacing-04";
    margin-top: "spacing-04";
  }

  .image {
    width: 100%;
    font-size: 4rem;
    display: block;
    height: 40vh;
    background-color: #ffffff;
    color: #000000;
  }

  .img-container h1 {
    position: absolute;
    z-index: 20;
    left: 50%;
    transform: translate(-50%, 0);
    font-weight: bolder;
    bottom: 10px;
  }

  .imgWrap {
    position: relative;
    display: inline-block;
  }

  .imgWrap::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 50%,
      rgba(10, 10, 10, 1) 100%
    );
  }
</style>
