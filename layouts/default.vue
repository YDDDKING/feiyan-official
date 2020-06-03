<template>
  <div>
    <Header/>
		<nuxt/>
    <Footer/>
	</div>
</template>

<script>
import Header from '../components/headers'
import Footer from '../components/footers'
export default {
  components: {
    Header,
    Footer,
  },
  data () {
    return {
    }
  }
}
</script>
