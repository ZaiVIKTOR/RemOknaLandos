<template>
  	<label for="theme-switch" class="switch">
		<input @click="sendValue" v-model="dark_theme" id="theme-switch" type="checkbox" placeholder="свитч изменения темы">
		<span class="slider"></span>
	</label>
</template>

<script>

export default {
	name: 'switch-theme',
  props: ['themeValue'],
  data() {
    return {
      dark_theme: false,
    }
  },
  methods: {
    sendValue() {
      this.$emit('getValue', this.dark_theme)
    }
  },
  mounted() {
    this.dark_theme = !this.themeValue;
  }
}
</script>

<style scoped>
	/* The switch - the box around the slider */
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  --background: #bafa21;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--background);
  transition: .5s;
  border-radius: 30px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 50%;
  left: 10%;
  bottom: 15%;
  box-shadow: inset 8px -4px 0px 0px #121212;
  background: var(--background);
  transition: .5s;
}

input:checked + .slider {
  background-color: #bafa21;
}

input:checked + .slider:before {
  transform: translateX(100%);
  box-shadow: inset 15px -4px 0px 15px #121212;
}
</style>