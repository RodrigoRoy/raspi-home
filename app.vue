<template>
  <!-- Navbar -->
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

  <!-- Introduction -->
  <UContainer class="mt-6">
    <div class="mb-6">
      {{ $t('title') }}
    </div>

    <!-- Jellyfin section -->
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

      <!-- Network drive unit section -->
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

      <!-- Galleta section -->
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

      <!-- Visit book section -->
      <UCard class="bg-gradient-to-br hover:from-violet-950">
        <div class="mb-4">
          <img src="/Writing.jpg" alt="" class="object-cover">
          <p class="text-lg font-medium my-3">
            <span class="text-primary">Libro de visitas</span>
          </p>
          <p>
            Deja un mensaje en el libro de visitas
          </p>
        </div>
        <UButton class="mr-4 mb-2" icon="i-mdi-send" @click="modalVisit = true; rngPicture()">Comentario</UButton>
      </UCard>
    </div>

    <!-- Carousel of comments -->
    <div class="flex justify-center">
      <div class="w-10/12 text-center">
        <UCarousel ref="carouselRef" v-slot="{ item }" :items="comments" :ui="{ item: 'w-full snap-start basis-full'}" class="my-6 pb-12" indicators>
          <figure class="text-center mx-auto">
            <svg class="size-8 mx-auto mb-1 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
              <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor"></path>
            </svg>
            <blockquote>
              <p class="italic font-medium text-gray-900 dark:text-white">"{{ item.content }}"</p>
            </blockquote>
            <figcaption class="flex items-center justify-center mt-3 space-x-3 rtl:space-x-reverse">
              <img class="size-12 rounded-full" :src="`avatar/${item.picture}`" alt="Profile picture">
              <div class="flex items-center">
                <cite class="not-italic pe-3 font-medium text-gray-900 dark:text-neutral-400">{{ item.name }}</cite>
              </div>
            </figcaption>
          </figure>
        </UCarousel>
      </div>
    </div>

    <!-- Network drive modal -->
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

    <!-- File manager modal -->
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

    <!-- Comment modal -->
    <UModal v-model="modalVisit" fullscreen prevent-close >
      <UCard :ui="{ base: 'h-full flex flex-col', rounded: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800', body: { base: 'grow' } }">
        <template #header>
          <div class="flex items-center justify-between">
            <p>
              Comentario
            </p>
            <UButton color="gray" variant="ghost" icon="i-mdi-close" class="-my-1" @click="modalVisit = false" />
          </div>
        </template>

        <!-- Comment form -->
        <UForm class="space-y-4" :schema="commentSchema" :state="comment" @submit="onSubmit">
          <UFormGroup label="" name="content">
            <UTextarea v-model="comment.content" rows="5" autoresize placeholder="Escribe tu comentario..." />
          </UFormGroup>
          
          <UFormGroup label="" name="name">
            <UInput v-model="comment.name" placeholder="Tu nombre" />
          </UFormGroup>

          <UButton type="submit" icon="i-mdi-send" :loading="sendingData">
            Enviar
          </UButton>
        </UForm>

        <!-- Preview comment -->
        <figure v-if="comment.content" class="text-center mx-auto">
            <svg class="size-8 mx-auto mb-1 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
              <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor"></path>
            </svg>
            <blockquote>
              <p class="italic font-medium text-gray-900 dark:text-white">"{{ comment.content }}"</p>
            </blockquote>
            <figcaption class="flex items-center justify-center mt-3 space-x-3 rtl:space-x-reverse">
              <img class="size-12 rounded-full" :src="`avatar/${comment.picture}`" alt="Profile picture">
              <div class="flex items-center">
                <cite class="not-italic pe-3 font-medium text-gray-900 dark:text-neutral-400">{{ comment.name || 'Anonymous' }}</cite>
              </div>
            </figcaption>
          </figure>
      </UCard>
    </UModal>
  </UContainer>
</template>

<script setup>
import dayjs from '#build/dayjs.imports.mjs'
import { z } from 'zod'

useHead({
  title: 'Sugar roomie',
})

// Multi-language support
const { locale } = useI18n()

// Coments from database
const { data: comments } = await useFetch('/api/comment')

// Carousel ref
const carouselRef = ref()

// User comment validation schema (zod library)
const commentSchema = z.object({
  name: z.string().max(32, { message: 'Límite de 32 caracteres'}).trim(),
  content: z.string().min(1, { message: 'Olvidaste escribir'}).max(280, { message: 'Límite de 280 caracteres'}).trim(),
})

// User comment
const comment = reactive({
  name: '',
  content: '',
  picture: '',
})

// Set location for day.js
dayjs.locale(locale)

const modalWindows = ref(false)
const modalAndroid = ref(false)
const modalVisit = ref(false)
const sendingData = ref(false)

const domain = ref('.com')
const domainExtensions = ['.online', '.life', '.pro', '.net', '.tv', '.ai', '.site', '.live', '.club', '.world', '.tech', '.company', '.media', '.wiki', '.app']

const galletaBirthday = dayjs('2024-11-30')
let toBirthday = dayjs().to(galletaBirthday)

/**
 * Randomize picture/image of a comment
 */
function rngPicture(){
  comment.picture = `${Math.floor(Math.random()*9)+1}.jpg`
}

/**
 * Save comment in database
 */
async function onSubmit(){
  sendingData.value = true
  comment.name = comment.name ? comment.name : 'Anonymous'
  
  await $fetch('/api/comment', {method: 'post', body: JSON.parse(JSON.stringify(comment))})
  await new Promise((res) => setTimeout(res, 2000))
  await refreshNuxtData()
  
  // Clear form data
  comment.name = ''
  comment.content = ''

  // Close modal
  modalVisit.value = false
  sendingData.value = false
}

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