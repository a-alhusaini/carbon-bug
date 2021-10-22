<!-- routify:options preload="proximity" -->
<script>
  import { Button, Header, HeaderUtilities } from "carbon-components-svelte";
</script>

<Header href="/" platformName="lorem ipsum">
  <HeaderUtilities>
    <Button size="small">Sign Up</Button>
    <Button size="small" kind="secondary">Log In</Button>
  </HeaderUtilities>
</Header>

<main class="bx--content" id="content">
  <slot />
</main>

<style>
  #content {
    background-color: "ui-background" !important;
  }
</style>
