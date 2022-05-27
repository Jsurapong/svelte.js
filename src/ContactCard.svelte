<script>
  export let userName;
  export let jobTitle;
  export let description;
  export let userImage;

  const initName = userName;
</script>

<div class="contact-card">
  <header>
    <div class="thumb" class:thumb-placeholder={!userImage}>
      <img src={userImage} alt={userName} />
    </div>
    <div class="user-data">
      <h1>{userName} / {initName}</h1>
      <h2>{jobTitle}</h2>
    </div>
  </header>
  <div class="description">
    <p>{@html description}</p>
  </div>
</div>

<style>
  .contact-card {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    max-width: 30rem;
    border-radius: 5px;
    margin: 1rem 0;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7rem;
  }

  .thumb {
    width: 33%;
    height: 100%;
  }

  .thumb-placeholder {
    background-color: gray;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .user-data {
    width: 67%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 4px;
  }

  h1 {
    font-size: 1.25rem;
    font-family: "Roboto Slab", sans-serif;
    margin: 0.5rem 0;
  }

  h2 {
    font-size: 1rem;
    font-weight: normal;
    color: #5a5a5a;
    margin: 0;
    margin-bottom: 0.5rem;
  }

  .description {
    border-top: 1px solid #ccc;
    padding: 1rem;
  }
</style>
