<template>
  <div>
    <the-header></the-header>
    <the-home></the-home>
  </div>
</template>

<script>
  import TheHeader from '@/components/layout/TheHeader'
  import TheHome from '@/components/layout/TheHome'
  export default {
    name: 'IndexPage',
    components: {
      TheHeader,
      TheHome
    },
    data() {
      return {
        activeButton: 1,
        resources: [
          {
            title: "Official Guide",
            description: "The official Vue.js documentation.",
            link: "https://www.youtube.com"
          },
          {
            title: "Google",
            description: "Learn to Google...",
            link: "https://www.google.com"
          }
        ],
        newResource: this.newItem
      }
    },
    methods: {
      getActive(btn) {
        return this.activeButton === btn ? "active" : "";
      },
      setActive(btn) {
        this.activeButton = btn;
      },
      deleteResource(idx) {
        this.resources.splice(idx, 1);
      },
      submittedResource() {
        this.activeButton = 1;
      }
    },
    provide() {
      return {
        resources: this.resources
      }
    }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
body {
  font-family: Open Sans,sans-serif;
    font-size: 1rem;
}
.container {
    padding: 60px 0;
}
h2 {
    text-align: center;
    margin-bottom: 40px;
    font-size: 2.8125rem;
    font-weight: 800;
}
</style>
