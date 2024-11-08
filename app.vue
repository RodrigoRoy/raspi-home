<template>
  <div class="py-4 px-6 border-b border-gray-200 dark:border-gray-800 bg-primary/15">
    <UContainer>
      <div class="flex justify-between">
        <div>
          <UIcon name="i-mdi-dog" class="mr-2 w-6 h-6 align-middle" /><span class="uppercase text-lg font-semibold">Galleta's House</span>
          <span class="font-light text-sm ml-1">{{ domain }}</span>
        </div>
        <div class="flex">
          <USelect icon="i-mdi-translate" v-model="locale" :options="['es', 'en']" />
          <UButton icon="i-mdi-github" variant="link" to="https://github.com/RodrigoRoy/raspi-home" external />
        </div>
      </div>
    </UContainer>
  </div>

  <UContainer class="mt-6">
    <div class="mb-6">
      {{ $t('title') }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <UCard class="bg-gradient-to-br hover:from-violet-950">
        <div class="mb-4">
          <img src="/Jellyfin.png" alt="" class="object-scale-down">
          <p class="text-lg font-medium my-3">
            <span class="text-primary">Jellyfin - {{ $t('jellyfinSubtitle') }}</span>
          </p>
          <p>
            {{ $t('jellyfinDescription') }}
          </p>
          <p class="text-xs mt-2">{{ $t('password') }}: <span class="italic">raspberry</span></p>
        </div>
        <UButton class="mr-4 mb-2" icon="i-mdi-web" to="http://192.168.1.97:8096" external>Online</UButton>
        <UButton class="mr-4 mb-2" icon="i-mdi-android" to="https://play.google.com/store/apps/details?id=org.jellyfin.mobile" external>Android</UButton>
      </UCard>

      <UCard class="bg-gradient-to-br hover:from-violet-950">
        <div class="mb-4">
          <img src="/Network.png" alt="" class="object-cover">
          <p class="text-lg font-medium my-3">
            <span class="text-primary">{{ $t('networkTitle') }}</span>
          </p>
          <p>
            {{ $t('networkDescription') }}
          </p>
        </div>
        <UButton class="mr-4 mb-2" icon="i-mdi-microsoft-windows" @click="modalWindows = true">Windows</UButton>
        <UButton class="mr-4 mb-2" icon="i-mdi-android" @click="modalAndroid = true">Android</UButton>
      </UCard>

      <UCard class="bg-gradient-to-br hover:from-violet-950">
        <div class="mb-4">
          <img src="/Galleta.jpg" alt="" class="object-cover">
          <p class="text-lg font-medium my-3">
            <span class="text-primary">{{ $t('about') }} Galleta</span>
          </p>
          <p>
            {{ $t('aboutGalleta1') }} <span class="font-bold">{{ $t('aboutGalletaBirthday') }}</span>, {{ toBirthday }}! {{ $t('aboutGalleta2') }} Galleta:
          </p>
        </div>
        <UButton class="mr-4 mb-2" icon="i-mdi-spotify" to="https://open.spotify.com/playlist/0TjV4qPqCJO6xykqniHVIh?si=cf09bfaddd3948ba" external>Playlist</UButton>
        <UButton class="mr-4 mb-2" icon="i-mdi-google-photos" to="https://photos.app.goo.gl/CYNG1btyaDXMh99q7" external>{{ $t('gallery') }}</UButton>
        <!-- <UButton class="mr-4 mb-2" icon="i-mdi-instagram" disabled>Instagram</UButton> -->
      </UCard>
    </div>

    <div class="flex justify-center">
      <div class="w-10/12 text-center">
        <UCarousel ref="carouselRef" v-slot="{ item }" :items="commentsData" :ui="{ item: 'w-full snap-start basis-full'}" class="my-6 pb-12" indicators>
          <figure class="text-center mx-auto">
            <svg class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
            </svg>
            <blockquote>
              <p class="text-2xl italic font-medium text-gray-900 dark:text-white">"{{ item.content }}"</p>
            </blockquote>
            <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
              <img class="w-6 h-6 rounded-full" :src="`avatar/${item.avatar}.jpg`" alt="Profile picture">
              <div class="flex items-center">
                <cite class="pe-3 font-medium text-gray-900 dark:text-white">{{ item.name }}</cite>
              </div>
            </figcaption>
          </figure>
        </UCarousel>
      </div>
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
  <!-- {{ comments }} -->
</template>

<script setup>
import dayjs from '#build/dayjs.imports.mjs';

useHead({
  title: 'Sugar roomie',
})

const { locale } = useI18n()
// const { data: comments } = await useFetch('/api/comment')

const carouselRef = ref()
const commentsData = [
  {
    name: 'Rodrigo',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    avatar: 1,
  },
  {
    name: 'Irene',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    avatar: 3,
  },
  {
    name: 'Jon',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    avatar: 5,
  },
  {
    name: 'Vanessa Rubi',
    content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..',
    avatar: 8,
  }
]

// Set location for day.js
dayjs.locale(locale)

const modalWindows = ref(false)
const modalAndroid = ref(false)

const domain = ref('.com')
const domainExtensions = ['.online', '.life', '.pro', '.net', '.tv', '.ai', '.site', '.live', '.club', '.world', '.tech', '.company', '.media', '.wiki', '.app']

const galletaBirthday = dayjs('2024-11-30')
let toBirthday = dayjs().to(galletaBirthday)

// Update locale date when another language is selected
watch(locale, (newLocale) => {
  dayjs.locale(newLocale)
  toBirthday = dayjs().to(galletaBirthday)
})

// Change domain extension every 10 seconds
onMounted(() => {
  // Autoplay carousel
  setInterval(() => {
    if (!carouselRef.value) return
    
    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }
    
    carouselRef.value.next()
  }, 10000)

  // Autochange domain extension
  window.setInterval(() => {
    domain.value = domainExtensions[Math.floor(Math.random() * domainExtensions.length)]
  }, 10000)
})
</script>