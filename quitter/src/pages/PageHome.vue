<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen">
      <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
        <div class="col">
          <q-input v-model="newQweetContent" placeholder="What's happening?" counter maxlength="280" botton-slots autogrow class="new-queet">
            <template v-slot:before>
              <q-avatar size="xl">
                <img src="https:/cdn.quasar.dev/img/avatar5.jpg">
              </q-avatar>
            </template>
          </q-input>
        </div>
        <div class="col col-shrink">
          <q-btn @click="addNewQweet" :disable="!newQweetContent" class="q-mb-lg" unelevated rounded color="primary" label="Queet" no-caps />
        </div>
      </div>
      <q-separator size="10px" color="grey-2" class="divider" />
      <q-list separator>
        <transition-group appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" />
        <q-item v-for="qweet in qweets" :key="qweet.date" class="q-py-md">
          <q-item-section avatar top>
            <q-avatar>
              <img src="https:/cdn.quasar.dev/img/avatar5.jpg">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label><strong>George Royce</strong></q-item-label>
            <q-item-label class="qweet-content">{{ qweet.content }}</q-item-label>
            <div class="row justify-between q-mt-sm">
              <q-btn flat round color="gray" icon="far fa-comment"/>
              <q-btn flat round color="gray" icon="fas fa-retweet"/>
              <q-btn flat round color="gray" icon="far fa-heart"/>
              <q-btn flat round color="gray" icon="fas fa-trash"/>
            </div>
          </q-item-section>
          <q-item-section side top>{{ qweet.date }}</q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>
<script>
export default {
  name: 'PageHome',
  data () {
    return {
      newQweetContent: '',
      qweets: [
        {
          content: 'There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them',
          date: 1635627999211
        },
        {
          content: "Aerodynamically the bumblebee shouldn't be able to fly but the bumblebee doesn't know that so it goes on flying anyway",
          date: 1635628100512
        }
      ]
    }
  },
  methods: {
    addNewQweet () {
      const newQweet = {
        content: this.newQweetContent,
        date: Date.now()
      }
      this.qweets.unshift(newQweet)
      this.newQweetContent = ''
    }
  }
}
</script>
<style lang="sass">
  .divider
    border-top: 1px solid
    border-bottom: 1px solid
  .new-qweet textarea
    font-size: 19px
    line-height: 1.4 !important
    border-color: grey-4
  .qweet-content
    white-space: pre-line
</style>
