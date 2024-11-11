<template>
    <div class="py-4 px-6 border-b border-gray-200 dark:border-gray-800 bg-primary/15">
        <UContainer>
            <div class="flex justify-between">
                <div>
                    <UIcon name="i-mdi-dog" class="mr-2 w-6 h-6 align-middle" /><span class="uppercase text-lg font-semibold">Galleta's House</span>
                    <span class="font-light text-sm ml-1">{{ domain }}</span>
                </div>
                <div class="flex">
                    <USelect icon="i-mdi-translate" v-model="app.locale" :options="['es', 'en']" />
                </div>
            </div>
        </UContainer>
    </div>
</template>

<script setup>
const app = useAppStore()

const domain = ref('.com')
const domainExtensions = ['.online', '.life', '.pro', '.net', '.tv', '.ai', '.site', '.live', '.club', '.world', '.tech', '.company', '.media', '.wiki', '.app']

// Change domain extension every 10 seconds
onMounted(() => {
  // Autochange domain extension
  window.setInterval(() => {
    domain.value = domainExtensions[Math.floor(Math.random() * domainExtensions.length)]
  }, 10000)
})
</script>