<template>
  <div class="container mx-auto text-center">
    <div class="py-32">
      <h1 class="text-5xl">
        <slot name="heading"></slot>
      </h1>
      <p class="text-2xl text-hairline py-6">
        <slot name="message"></slot>
      </p>
    </div>
  </div>
</template>
