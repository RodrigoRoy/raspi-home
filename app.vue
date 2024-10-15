<template>
  <div class="py-4 px-6 border-b border-gray-200 dark:border-gray-800 bg-primary/15">
    <div class="flex justify-between">
      <div>
        <UIcon name="i-mdi-dog" class="mr-2 w-6 h-6 align-middle" /><span class="uppercase text-lg font-semibold">Galleta's House</span>
        <span class="font-light text-sm ml-1">{{ domain }}</span>
      </div>
      <USelect icon="i-mdi-translate" v-model="locale" :options="['es', 'en']" />
    </div>
  </div>

  <UContainer class="mt-6">
    <div class="mb-6">
      {{ $t('title') }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <UCard>
        <template #header>
          <span class="text-primary">Jellyfin - {{ $t('jellyfinSubtitle') }}</span>
        </template>
        <p>
          {{ $t('jellyfinDescription') }}
        </p>
        <p class="text-xs mt-2">{{ $t('password') }}: <span class="italic">raspberry</span></p>
        
        <template #footer>
          <UButton class="mr-4 mb-2" icon="i-mdi-web" to="http://192.168.1.97:8096" external>Online</UButton>
          <UButton class="mr-4 mb-2" icon="i-mdi-android" to="https://play.google.com/store/apps/details?id=org.jellyfin.mobile" external>Android</UButton>
        </template>
      </UCard>

      <UCard>
        <template #header>
          <span class="text-primary">{{ $t('networkTitle') }}</span>
        </template>
        <p>
          {{ $t('networkDescription') }}
        </p>
        <template #footer>
          <UButton class="mr-4 mb-2" icon="i-mdi-microsoft-windows" @click="modalWindows = true">Windows</UButton>
          <UButton class="mr-4 mb-2" icon="i-mdi-android" @click="modalAndroid = true">Android</UButton>
        </template>
      </UCard>
    </div>

    <UModal v-model="modalWindows">
      <UCard>
        <template #header>
          {{ $t('networkTitle') }} | Windows
        </template>

        <ol class="list-decimal list-inside">
          <li>{{ $t('networkWindowsStep1') }}</li>
          <li>
            {{ $t('networkWindowsStep2') }}
            <ul class="list-disc list-inside indent-4">
              <li>{{ $t('drive') }}: {{ $t('driveValue') }}</li>
              <li>{{ $t('path') }}: <span class="font-bold">\\192.168.1.97\Nube</span></li>
              <li>{{ $t('checkCredentials') }}</li>
            </ul>
          </li>
          <li>{{ $t('networkWindowsStep3') }}</li>
          <li>
            {{ $t('networkWindowsStep4') }}
            <ul class="list-disc list-inside indent-4">
              <li>{{ $t('username') }}: <span class="font-bold">pi</span></li>
              <li>{{ $t('password') }}: <span class="font-bold">raspberry</span></li>
            </ul>
          </li>
          <li>{{ $t('networkWindowsStep5') }}</li>
        </ol>
      </UCard>
    </UModal>

    <UModal v-model="modalAndroid">
      <UCard>
        <template #header>
          {{ $t('networkTitle') }} | Android
        </template>
        <p>{{ $t('networkAndroidText') }} <UButton to="https://play.google.com/store/apps/details?id=com.alphainventor.filemanager" external icon="i-mdi-launch" trailing variant="link">File Manager</UButton></p>
        <ol class="list-decimal list-inside">
          <li>{{ $t('networkAndroidStep1') }}</li>
          <li>{{ $t('networkAndroidStep2') }} <span class="font-bold">SMB</span></li>
          <li>
            {{ $t('networkAndroidStep3') }}
            <ul class="list-disc list-inside indent-4">
              <li>{{ $t('host') }}: <span class="font-bold">\\192.168.1.97\Nube</span></li>
              <li>{{ $t('username') }}: <span class="font-bold">pi</span></li>
              <li>{{ $t('password') }}: <span class="font-bold">raspberry</span></li>
            </ul>
          </li>
          <li>{{ $t('networkAndroidStep4') }}</li>
        </ol>
      </UCard>
    </UModal>
  </UContainer>
</template>

<script setup>
useHead({
  title: 'Sugar roomie',
})
const { locale } = useI18n()
const modalWindows = ref(false)
const modalAndroid = ref(false)

const domain = ref('.com')
const domainExtensions = ['.online', '.life', '.pro', '.net', '.tv', '.ai', '.site', '.live', '.club', '.world', '.tech', '.company', '.media', '.wiki', '.app']

// Change domain extension every 10 seconds
onMounted(() => {
  window.setInterval(() => {
    domain.value = domainExtensions[Math.floor(Math.random() * domainExtensions.length)]
  }, 10000)
})
</script>