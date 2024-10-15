<template>
  <UCard>
    <template #header>
      <UIcon name="i-mdi-dog" class="mr-2 w-6 h-6" /><span class="uppercase">Galleta's House</span>
      {{ domain }}
    </template>
  </UCard>
  
  <UContainer class="mt-6">
    <div class="mb-6">
      El único servidor con la aprobación oficial de Galleta
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <UCard>
        <template #header>
          <span class="text-primary">Jellyfin - Free Software Media System</span>
        </template>
        <p>
          Reproductor y visualizador de películas, series, videos, fotos, música y libros.
        </p>
        <p class="text-xs mt-2">Contraseña: <span class="italic">raspberry</span></p>
        
        <template #footer>
          <UButton class="mr-4 mb-2" icon="i-mdi-web" to="http://192.168.1.97:8096" external>Online</UButton>
          <UButton class="mr-4 mb-2" icon="i-mdi-android" to="https://play.google.com/store/apps/details?id=org.jellyfin.mobile" external>Android</UButton>
        </template>
      </UCard>

      <UCard>
        <template #header>
          <span class="text-primary">Unidad en red</span>
        </template>
        <p>
          Conecta el servidor a tu dispositivo para transferir y compartir archivos.
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
          Unidad de red | Windows
        </template>

        <ol class="list-decimal list-inside">
          <li>Abrir Navegador de archivos > Este equipo > Conectar a unidad de red</li>
          <li>
            Ingresar datos
            <ul class="list-disc list-inside indent-4">
              <li>Unidad: Cualquier valor disponible</li>
              <li>Carpeta: <span class="font-bold">\\192.168.1.97\Nube</span></li>
              <li>Marcar la opción "Conectar con otras credenciales"</li>
            </ul>
          </li>
          <li>Clic en "Finalizar"</li>
          <li>
            Ingresar credenciales
            <ul class="list-disc list-inside indent-4">
              <li>Nombre de usuario: <span class="font-bold">pi</span></li>
              <li>Contraseña: <span class="font-bold">raspberry</span></li>
            </ul>
          </li>
          <li>Clic en "Aceptar"</li>
        </ol>
      </UCard>
    </UModal>

    <UModal v-model="modalAndroid">
      <UCard>
        <template #header>
          Conexión remota | Android
        </template>
        <p>Usar app de navegación de archivos. Las instrucciones aplican para la app <UButton to="https://play.google.com/store/apps/details?id=com.alphainventor.filemanager" external icon="i-mdi-launch" trailing variant="link">File Manager</UButton></p>
        <ol class="list-decimal list-inside">
          <li>Home > Remote > Add a remote location</li>
          <li>Seleccionar opción <span class="font-bold">SMB</span></li>
          <li>
            Ingresar datos
            <ul class="list-disc list-inside indent-4">
              <li>Host: <span class="font-bold">\\192.168.1.97\Nube</span></li>
              <li>Username: <span class="font-bold">pi</span></li>
              <li>Password: <span class="font-bold">raspberry</span></li>
            </ul>
          </li>
          <li>Clic en "Ok"</li>
        </ol>
      </UCard>
    </UModal>
    <!-- <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between">
          <h1>Sugar roomie</h1>
          <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" /></ColorScheme>
        </div>
      </template>
      <UButton icon="i-heroicons-book-open" to="https://ui.nuxt.com" target="_blank">Open Nuxt UI Documentation</UButton>
    </UCard> -->
  </UContainer>
</template>

<script setup>
useHead({
  title: 'Sugar roomie',
  // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
})
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