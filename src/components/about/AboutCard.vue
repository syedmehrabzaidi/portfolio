<template>
  <div class="quote-card-view card">
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p style="text-align: justify">
          Hi Everyone, I am <span class="blue">Syed Mehrab</span> from
          <span class="blue">Karachi, Pakistan.</span>
          <br />
          I am currently employed as a Software Engineer at Nextgeni.
          <br />
          I have completed Bachelor of Software Engineering from Iqra university Main campus Karachi.
          <br />
          <br />
          Apart from coding, some other activities that I love to do!
        </p>
        <ul>
          <li class="about-activity">
            <font-awesome-icon :icon="['fas', 'hand-point-right']" /> Playing Games
          </li>
          <li class="about-activity">
            <font-awesome-icon :icon="['fas', 'hand-point-right']" /> Writing Tech Blogs
          </li>
          <li class="about-activity">
            <font-awesome-icon :icon="['fas', 'hand-point-right']" /> Travelling
          </li>
        </ul>

        <p style="color: rgb(134 147 236)">
          "Aim to create things that truly matter and make an impact!"
        </p>
        <footer class="blockquote-footer">Syed Mehrab</footer>
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutCard'
}
</script>

<style scoped>
.quote-card-view {
  background-color: #f8f9fa;
  border: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.about-activity {
  list-style-type: none;
  margin-bottom: 10px;
}

.blockquote-footer {
  font-size: 0.9rem;
  color: #6c757d;
}
</style>
