<template>
	<div class="content">
		<h4>Hello bro</h4>
		<p>{{ message }}</p>
    <ul>
      <li v-for="list in lists">{{ list.name }}</li>
    </ul>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        message: 'Hallo bro',
        lists: [
          { name: 'Adik' },
          { name: 'Kakak' },
          { name: 'Sepupu' },
        ],
      };
    },
  };
</script>
